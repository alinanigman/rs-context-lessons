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
  const { name, age, email, phone } = userData;
  return (
    <AppContext value={userData}>
      <div className={styles.App}>
        <Header />
        <hr />
        <UserBlock name={name} age={age} email={email} phone={phone} />
      </div>
    </AppContext>
  );
};
