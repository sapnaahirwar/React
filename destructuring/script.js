const person = {
    firstName : "Sapna",
    lastName : "Ahirwar",
    age : 20 ,
    City : "bhopal",
};
// old way 

// let fname = person.firstName;
// let lname = person.lastName;
// let age = person.age;
// let City = person.City

// destructing person
// change name in short form is called object name alias
// let {firstName:fname,lastName:lname,age,City,country="India"} = person;
// console.log(firstName + " "+ lastName + " " + age + " "+ City+ " "+ country );

const app = ["facebook","instagram","whatsapp","amazon"]
// old way 
// let app1 = app[0]
// let app2 = app[1]
// let app3 = app[2]
// let app4 = app[3]

// const[app1,app2,app3] = app;

// you can also skip the elements 
// const[app1,,,app4] =app;
// console.log(app1+" "+app4)

// console.log(app1+" "+app2+ " "+app3+ " ")

// spread operator 
// copies the values from array into another array 
const num1 = [1,2,3,4,5,100,200,300,400];
// spread operator with destructuring 
const [a,b,c,...rest]=num1;
console.log(a+ " "+b+" "+c);
console.log(rest);
// const num2 = [6,7,8,9,10];
// const num3 = [11,12,13,14,15];

// const combined =[...num1,...num3];
// console.log(combined);
