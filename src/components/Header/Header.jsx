import { CurrentUser } from "./components";
export const Header = ({ currentUser }) => {
  return (
    <div>
      <h2>Header information</h2>
      <CurrentUser currentUser={currentUser} />
    </div>
  );
};
