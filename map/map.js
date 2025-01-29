// map method 
// const number = [1,2,3,4,5,6]
// for (let i=0; i<number.length;i++){
//     console.log(number[i])
// }
// map method perform an function/operation on each element of the array and return a new array with those values
// map is a higher order function 
// when u call a function and the another function pass as an argument is called higher order function 
// function display(i){
//     return i * 2;
// }
// console.log(newarray);
const students = [
    {name:"sapna", course: "AIML" , city:"Bhopal",college:"RKDF",batch:"p-28"},
    {name:"hanshu", course: "CSE" , city:"Guna",college:"IES",batch:"p-33"},
    {name:"Shaily", course: "B.com" , city:"Rajgadh",college:"SIRT",batch:"p-35"},
    {name:"pooja", course: "M.tech" , city:"Indore",college:"Bansal",batch:"d-28"},
    {name:"teena", course: "BCA" , city:"Ujjain",college:"Sistec",batch:"d-27"},

];
let table = `<table border = "1px" width= "600px" bgcolor="lightblue" border-radius="20px">
<tr bgcolor = "pink">
  <th>Student name</th>
  <th>Course</th>
  <th>City</th>
  <th>College</th>
  <th>Batch</th>

  </tr>
  `;

  students.map((key) => {
    table +=`
    <tr>
     <td>${key.name}</td>
     <td>${key.course}</td>
     <td>${key.city}</td>
     <td>${key.college}</td>
     <td>${key.batch}</td>
     </tr>`;
  });

table+=`</table>`;
document.getElementById("demo").innerHTML = table;


// in json keys and values are write in double codes 
// when promise successfulll it returns Response object 
// promise when failed return error 
// fetch and async await return promise 

