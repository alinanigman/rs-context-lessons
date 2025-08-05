import { useStoreSelector } from "@/hooks/useStoreSelector";

export const UserContacts = () => {
  const email = useStoreSelector((state) => state.email);
  const phone = useStoreSelector((state) => state.phone);

  return (
    <div>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};
