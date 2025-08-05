import { useReducer, useEffect } from "react";
import { Header, UserBlock } from "./components";
import { AppContext } from "./context";
import styles from "./App.module.css";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER_DATA": {
      return payload;
    }
    case "SET_USER_AGE": {
      return { ...state, age: payload };
    }
    default:
      return state;
  }
};

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
  const [userData, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    const requestData = getUserFromServer(1);
    dispatch({ type: "SET_USER_DATA", payload: requestData });
  }, []);

  const onChangeUser = () => {
    const requestData = getUserFromServer(2);
    dispatch({ type: "SET_USER_DATA", payload: requestData });
  };

  if (!userData) {
    return <>Oops :/</>;
  }

  return (
    <AppContext value={{ userData, dispatch }}>
      <div className={styles.App}>
        <Header />
        <hr />
        <UserBlock />
      </div>
      <button onClick={onChangeUser}>Change user</button>
    </AppContext>
  );
};
