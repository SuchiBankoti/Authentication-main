import { createContext, useState } from "react";

const myContext = createContext();

function ContextData(props) {
  function saveToLocStr(token) {
    localStorage.setItem("token", token);
    const t = localStorage.getItem("token");
    setToken(t);
  }
  function getFromLocStr() {
    const t = localStorage.getItem("token");
    return t;
  }
  function removeFromLocStr() {
    localStorage.removeItem("token");
    setToken("");
  }
  const [token, setToken] = useState(getFromLocStr);
  return (
    <myContext.Provider
      value={{
        token,
        setToken,
        saveToLocStr,
        removeFromLocStr,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
}
export { myContext, ContextData };
