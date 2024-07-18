import { createContext, useEffect, useState } from "react";
import { getUsers } from "../utils/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

  
  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);

   const login = (user) => {
     setCurrentUser(user);
   };

   const logout = () => {
     setCurrentUser(null);
   };

  return (
    <UserContext.Provider
      value={{ users, setUsers, currentUser, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
