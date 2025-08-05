import { AppContext } from "@/context";
import { use } from "react";

export const CurrentUser = () => {
  const { userData } = use(AppContext);
  const { name } = userData;

  return <p>Current user: {name}</p>;
};
