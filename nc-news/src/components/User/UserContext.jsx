import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({
    username: "Log In",
    name: "",
    avatar_url:
      "https://en.wikipedia.org/wiki/File:Albert_Einstein_sticks_his_tongue_1951.jpg",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
