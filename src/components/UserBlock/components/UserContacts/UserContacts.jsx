import { AppContext } from "@/context";
import { use } from "react";

export const UserContacts = () => {
  const { userData } = use(AppContext);
  const { email, phone } = userData;
  
  return (
    <div>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};
