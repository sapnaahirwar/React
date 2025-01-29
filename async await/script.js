async function display(){
    let table = `
    <table border = "1px">
    <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
    </tr>`;
    let url ="http://localhost:3000/student";
    let responseobj = await fetch(url)
    console.log(responseobj);
    let mydata = await responseobj.json();
    console.log(mydata);
    mydata.map((key) => {
        table += `<tr>
        <td>${key.name}</td>
        <td>${key.name}</td>
        <td>${key.name}</td>
        </tr>`;
    });
    table+=`</table>`
    document.getElementById("demo").innerHTML = table;
}
display();