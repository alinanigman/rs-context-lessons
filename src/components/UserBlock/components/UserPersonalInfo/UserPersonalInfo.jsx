import { useStoreSelector } from "@/hooks/useStoreSelector";
import { store } from "@/store";

export const UserPersonalInfo = () => {
  const name = useStoreSelector((state) => state.name);
  const age = useStoreSelector((state) => state.age);

  const onChangeUser = () => {
    store.dispatch({
      type: "SET_USER_AGE",
      payload: Math.ceil(Math.random() * 100),
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
