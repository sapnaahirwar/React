import { useContext } from "react"
import { myContext } from "./App"

const Comp5=()=>{
    const {user} = useContext(myContext)
    return(
        <>
            <h1>Component-5</h1>
            <h1>welcome :{user}</h1>
            <button onClick={()=>{setUser("anjali ahirwar")}}>Click here!</button>
         
        </>
    )
}
export default Comp5;