import { useState } from 'react'
import './App.css'
import { useRef } from 'react';
const App=()=> {
const myRef = useRef();
const myFont=()=>{
  myRef.current.style.fontFamily="verdana";
}
const myColor=()=>{
  myRef.current.style.color="pink";
}
const myBg=()=>{
  myRef.current.style.backgroundColor = "aqua";
  myRef.current.style.borderRadius = "20px dotted white";
  myRef.current.style.color = "black"

}
  return (
    <>
     {/* <h1 ref={myRef} style={{color:"aqua"}}>Welcome to login app</h1>
     <button onClick={changeColor}>Click here!</button> */}
     <button onClick={myFont}>Font</button>
     <button onClick={myColor}>color</button>
     <button onClick={myBg}>Background</button>
     <br/><br/>
     <div ref={myRef} style={{width:"300px",height:"300px", border:"1px solid white"}}>
      <h1>Welcome to my App</h1>
     </div>
    </>
  )
}

export default App;
