// import { useMemo, useState } from 'react'
// import './App.css'
// const Usememo=()=> {
//   const [count,setCount]= useState(0);
//   const [name,setName]= useState("");
//   const thousandNumber = useMemo((num)=>{
//     return expensiveFunction(count)
//   },[count])
//   return (
//     <>
//      <input type="number" value={count} onChange={(e)=>setCount(parseInt(e.target.value))} />
//      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
//      <h1>{thousandNumber}</h1>
//     </>
//   )
// }
// export default Usememo;
// const expensiveFunction = (num) =>{
//     console.log('Calculating........');
//     for(let i =0;i<1000000000;i+1){}
//     return num;
// }
