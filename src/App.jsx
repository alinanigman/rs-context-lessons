import { Header, UserBlock } from "./components";
import { AppContext } from "./context";
import styles from "./App.module.css";

const getUserFromServer = () => ({
  id: "userid123456789",
  name: "John Doe",
  age: 32,
  email: "johndoe@gmail.com",
  phone: "+95551234567",
});

export const App = () => {
  const userData = getUserFromServer();
  return (
    <AppContext value={userData}>
      <div className={styles.App}>
        <Header />
        <hr />
        <UserBlock />
      </div>
    </AppContext>
  );
};
