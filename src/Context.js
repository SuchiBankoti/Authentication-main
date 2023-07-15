import { createContext, useState } from "react";

const myContext = createContext();

function ContextData(props) {
  const [token, setToken] = useState("");
  return (
    <myContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
}
export { myContext, ContextData };
