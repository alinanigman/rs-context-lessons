import { AppContext } from "@/context";
import { use } from "react";

export const CurrentUser = () => {
  const { name } = use(AppContext);
  return <p>Current user: {name}</p>;
};
