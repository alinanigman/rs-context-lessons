import { AppContext } from "@/context";
import { use } from "react";

export const UserPersonalInfo = () => {
  const { userData, dispatch } = use(AppContext);
  const { name, age } = userData;

  const onChangeUser = () => {
    dispatch({
      type: "SET_USER_DATA",
      payload: { ...userData, age: Math.ceil(Math.random() * 100) },
    });
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={onChangeUser}>Change age</button>
    </div>
  );
};
