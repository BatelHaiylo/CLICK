import { createContext, useState, useMemo } from "react";
import { getUsers } from "../service/users";

export const usersContext = createContext();

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [toggle, setToggle] = useState(false);

  const usersData = useMemo(
    () => getUsers().then((data) => setUsers(data)),
    [getUsers]
  );

  return (
    <usersContext.Provider value={{ users, setUsers, toggle, setToggle }}>
      {children}
    </usersContext.Provider>
  );
};