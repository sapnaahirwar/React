// import { useState,useEffect } from "react";

// const App=()=> {
// //  const[color,setColor]=useState("red")
//  const[cnt,setCnt] = useState(0);
//  const[multi,setMulti] = useState(0);
// //  useEffect(()=>{
// //   setTimeout(()=>{
// //     setCnt(cnt+1)
// //   },1000);
// //  },[]);

//   useEffect(()=>{
//     setMulti(cnt*2);
//   },[cnt])                                                     
//   return (
//     <>
//     <h1>My Counter:{cnt}</h1> 
//     <h2>New Counter:{multi}</h2>
//     <button onClick={()=>{setCnt(cnt+1)}}>Click here!</button>
    {/* {/* <h1>My Counter:{cnt}</h1> 
    <button onClick={()=>{setCnt(cnt+1)}}>Increment</button>
    <button onClick={()=>{setCnt(cnt-1)}}>Decrement</button> */}

    {/* <h1 style={{color:color}}>Welcome to our website:{color}</h1>
    <button onClick={()=>{setColor("green")}}>green color</button>
    <button onClick={()=>{setColor("violet")}}>violet color</button>
    <button onClick={()=>{setColor("pink")}}>pink color</button>
    <button onClick={()=>{setColor("aqua")}}>aqua color</button> */}


//     </>
//   );
// }

// export default App;



// const [val,setVal] = useState('Anushka');
  // const myval = () =>
  // {
  //   setVal("Sapna")
  // }

  // const[name,setName] = useState("");
  // const[city,setCity] = useState("");
    {/* <h1>my Application</h1>
    Enter name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
    <br/>
    Enter city: <input type="text" value={city} onChange={(e)=>{setCity(e.target.val */}
// const App = () =>{

//   return(
//     <>

//     </>
//   );

// }
// export default App;


// import { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [mydata, setMydata] = useState([]); // mydata=[]
//   const loadData = () => {
//     let api = "http://localhost:3000/Student";
//     axios.get(api).then((res) => {
//       console.log(res.data);
//       setMydata(res.data);
//     });
//   };
//   const ans = mydata.map((key) => {
//     return (
//       <>
//         <tr>
//           <td>{key.rollno}</td>
//           <td>{key.name}</td>
//           <td>{key.city}</td>
//           <td>{key.fess}</td>
//         </tr>
//       </>
//     );
//   });
//   useEffect(() => {
//     loadData();
//   }, []);
//   return (
//     <>
//       <h1>Welcome!!</h1>
//       <table border="2" width="400">
//         <tr>
//           <th>Roll No</th>
//           <th>Name</th>
//           <th>City</th>
//           <th>Fees</th>
//         </tr>
//         {ans}
//       </table>
//     </>
//   );
// }

// export default App;



import {Link , Outlet} from ReactDOM;
