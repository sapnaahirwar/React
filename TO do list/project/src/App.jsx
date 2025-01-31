import { useState,useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux";
import {addTask} from "./todoSlice";

import './App.css'
const App=()=> {
const[val,setVal] = useState("");
const Task = useSelector(state=>state.myslice.task);
const dispatch = useDispatch();
console.log(Task)
let sno=0;
const ans = Task.map((key)=>{
  sno++;
  return(
    <>
    <tr>
      <td>{sno}</td>
      <td>{key.task}</td>
      
    </tr>
    </>
  )
})
  return (
    <>
      <h1>Welcome to Do App</h1>
      <hr/>
      Enter your Task : <input type='text' value={val} onChange={(e)=>{setVal(e.target.value)}}/>
      <button onClick={()=>{dispatch(addTask({id:Date.now(),task:val}))}}>Add task</button>
      <hr/>
      <table border="1" width="400">
        <tr>
          <th>#</th>
          <th>Task</th>
        </tr>
        {ans}
      </table>
    </>
  )
}

export default App
