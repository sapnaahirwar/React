import { useState } from 'react'
import './App.css'
import {useSelector,useDispatch} from "react-redux";
import { mycolor } from './colorSlice';

const App=()=> {
  const color = useSelector(state=>state.mycolor.color);
  const dispatch = useDispatch();
  const [clr, setClr]=useState("")

  
  return (
    <>
      <h1>This is My App</h1>
      <button onClick={()=>{dispatch(mycolor("blue"))}}>Click here!</button>
      my input : <input type="text"  value={clr} onChange={(e)=>{setClr(e.target.value)}}/>
      <div style={{height:"200px",width:"200px",backgroundColor:clr}}>
      </div>
    </>
  )
}

export default App;
