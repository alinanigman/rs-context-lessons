import styles from "./App.module.css";
import { Header, UserBlock } from "./components";

const getUserFromServer = () => ({
  id: "userid123456789",
  name: "John Doe",
  age: 32,
  email: "johndoe@gmail.com",
  phone: "+95551234567",
});
export const App = () => {
  const { name, age, email, phone } = getUserFromServer();
  return (
    <div className={styles.App}>
      <Header currentUser={name} />
      <hr />
      <UserBlock name={name} age={age} email={email} phone={phone} />
    </div>
  );
};
