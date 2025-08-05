import { AppContext } from "@/context";
import { use } from "react";

export const UserPersonalInfo = () => {
  const { name, age } = use(AppContext);
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};
