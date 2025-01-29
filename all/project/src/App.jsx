import Header from "./Header.jsx";
// import Third from "./third";
// const App = () => {
//   const mine = "sapna";
//   const person = {
//     name: "hanshu",
//     age: 21,
//     city : "guna"
//   };
//   const student ={
//     course:"web development",
//     batch:"p-28",
//     language:"python"
//   }

//   return (
//     <>
//     <Header data = {person}  new = {student}/>
//     {/* <Header/> */}

//     {/* <Header  name = "rishika"/>
//     <Header  name = "sanika"/> */}
//     {/* <h2>Hello from arrow function</h2> */}
//     </>
//   );
// };


function App(){
  const UserData = {name:"sapna",attendance:81,intrest:98}
  const other = {name:"hanshu",attendance:80,intrest:90}

  return (
    <>
    <Header data = {UserData} hobby="dance"/>
    <Header data = {other} hobby="singing"/>
    <Third isEligible ={true}/>
    </>
  )
}
export default App;