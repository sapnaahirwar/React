let button = document.getElementById("btn");
button.addEventListener("click",add);
// to prevent the default submit behavior or form 
async function add(e){
    e.preventDefault();
    // console.log(y);
    let myname = document.getElementById("name").value;
    let myage = document.getElementById("course").value;
    let mycity = document.getElementById("city").value;
    // console.log(myname,myage,mycity);
try{
    let url = "http://localhost:3000/student";
    // fetch post call has 2 parameters url and another is object with 3 properties 
    let responseobj = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json;charset=utf-8"
        },
        body:JSON.stringify({
            name:myname,
            age:myage,
            name:mycity
        })
    });
    console.log(responseobj);
    let data= await responseobj.json();

    console.log(data);
    alert("data successfully sent");
}catch(error){
    console.log(error);
    alert("Error occured when sending data");
}
}
// 200-successful
// 404-error