// import { useReducer} from 'react'
// import './App.css'
// const initialstate = 0;
// const reducer = (state,action)=>{
//   switch (action)
//   {
//     case "Increment":
//       return state+1;
//     case "Decrement":
//       return state-1;
//     default:
//       return state;
//   }
// }
// const App=()=> {
//  const [count,dispatch] = useReducer(reducer,initialstate);
//   return (
//     <>
//       <h1>My count:{count}</h1>
//       <button onClick={()=>{dispatch("Increment")}}>Increment</button>
//       <button onClick={()=>{dispatch("Decrement")}}>Decrement</button>

//     </>
//   )
// }

// export default App;

import { useReducer} from 'react';
const App=()=>{
const reducer = (state,action)=>{
  switch(action){
    case "myBlue":
    state="blue"
    return state

    case "myViolet":
      state="violet";
      return state

      case "myBlack":
        state="black"
        return state

      default:
        state = "pink"
        return state

  }
}

  const[myColor,dispatch]=useReducer(reducer,"pink")
  return(
    <>
    <button onClick={()=>{dispatch("myBlue")}}>Blue</button>
    <button onClick={()=>{dispatch("myViolet")}}>Violet</button>
    <button onClick={()=>{dispatch("myBlack")}}>Black</button><br/>
    <br/>
    <div style={{width:"200px",height:"200px",backgroundColor:"white"}}></div>
    </>
  )
}
export default App;
