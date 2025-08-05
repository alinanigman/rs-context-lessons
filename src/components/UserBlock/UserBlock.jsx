import { UserPersonalInfo, UserContacts } from "./components";

export const UserBlock = () => {
  return (
    <div>
      <h3>User</h3>
      <UserPersonalInfo />
      <UserContacts />
    </div>
  );
};
