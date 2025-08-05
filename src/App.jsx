import { useEffect, useState } from "react";
import { Header, UserBlock } from "./components";
import { AppContext } from "./context";
import { store } from "./store";
import styles from "./App.module.css";

const getUserFromServer = (id) => {
  if (id === 1) {
    return {
      id: "userid123456789",
      name: "John Doe",
      age: 32,
      email: "johndoe@gmail.com",
      phone: "+95551234567",
    };
  }
  return {
    id: "userid22222222",
    name: "Bob Dylan",
    age: 48,
    email: "bob@gmail.com",
    phone: "+95550981256",
  };
};

export const App = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const requestData = getUserFromServer(1);
    store.dispatch({ type: "SET_USER_DATA", payload: requestData });
    setUserData(store.getState());
  }, []);

  const onChangeUser = () => {
    const requestData = getUserFromServer(2);
    store.dispatch({ type: "SET_USER_DATA", payload: requestData });
  };

  if (!userData) {
    return <>Oops :/</>;
  }

  return (
    <AppContext value={{ userData }}>
      <div className={styles.App}>
        <Header />
        <hr />
        <UserBlock />
      </div>
      <button onClick={onChangeUser}>Change user</button>
    </AppContext>
  );
};
