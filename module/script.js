// regular function  
function display (){
    console.log("hello world...........");
}
display();
// regular expression 
let display1 =  function (){
    console.log ("hello guys............");
}
display1();
// arrow function 
const display2 = () => {
    console.log("hey...........");
}
display2();
const display3 = name => console.log (`hello ${name} from shortest arrow function`);

display2();
display3("himanshu ahirwar");
// cdn-cross domain network
// in regular function this keyword always returns the object calling the function
// in ARROW FUNCTION  this keyword always return the window object
function hello1(){
    document.getElementById("demo").innerHTML = this;
}
const hello2 = () => {
    document.getElementById("demo").innerHTML = this;
}
window.addEventListener("load",hello2);
document.getElementById("btn").addEventListener("click",hello2);