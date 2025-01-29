import Comp1 from "./Comp1";
import { useState } from "react";
import { createContext } from "react";
const  myContext = createContext();
const App = () => {
  const [user, setUser] = useState("Sapna Ahirwar");

  return (
    <>
      <h1>my name: {user}</h1>
      <button onClick={()=>{setUser("Anushka joshi")}}>Click here!</button>
      <myContext.Provider value={{user,setUser}}>
        <Comp1/>
      </myContext.Provider>
    </>
  );
};

export default App;
export {myContext}
