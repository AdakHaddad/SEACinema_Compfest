import { signOut } from "next-auth/client";

const LogoutButton = () => {
  const handleLogout = () => {
    signOut();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
