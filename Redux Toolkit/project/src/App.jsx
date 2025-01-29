import { useState } from 'react'
import {useSelector,useDispatch} from "react-redux";
import { increment,decrement } from './counterSlice';
import './App.css'

const App=()=> {
  const ans = useSelector(state=>state.myslice.count);
  const dispatch = useDispatch();
  
  return (
    <>
     <h1>Welcome to Counter App</h1>
     <button onClick={()=>{dispatch(increment())}}>increment</button>
     <h1>{ans}</h1>
     <button onClick={()=>{dispatch(decrement())}}>decrement</button>

    </>
  )
}

export default App;
