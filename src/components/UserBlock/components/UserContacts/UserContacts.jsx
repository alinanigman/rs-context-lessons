import { AppContext } from "@/context";
import { use } from "react";

export const UserContacts = () => {
  const { email, phone } = use(AppContext);
  return (
    <div>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};
