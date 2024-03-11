import { useState, createContext, useContext } from "react";
import Childx from "./Childx";
export const UserContext = createContext();
export default function App13a() {
  const [user, setUser] = useState("John");
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <h2>Hello {user} from App13 component</h2>
        <Childx />
      </UserContext.Provider>
    </>
  );
}