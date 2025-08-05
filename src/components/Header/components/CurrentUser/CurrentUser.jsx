import { useStoreSelector } from "@/hooks/useStoreSelector";

export const CurrentUser = () => {
  const name = useStoreSelector((state) => state.name);
  return <p>Current user: {name ?? ""}</p>;
};
