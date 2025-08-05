import { useState, useEffect } from "react";
import { Header, UserBlock } from "./components";
import { AppContext } from "./context";
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
  const [userData, setUserData] = useState();

  useEffect(() => {
    const requestData = getUserFromServer(1);
    setUserData(requestData);
  }, []);

  const onChangeUser = () => {
    const requestData = getUserFromServer(2);
    setUserData(requestData);
  };

  if (!userData) {
    return <>Oops :/</>;
  }

  return (
    <AppContext value={userData}>
      <div className={styles.App}>
        <Header />
        <hr />
        <UserBlock />
        <button onClick={onChangeUser}>Change user</button>
      </div>
    </AppContext>
  );
};
