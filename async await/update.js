async function recdel(id){
    let url = `http://localhost:3000/student/${id}`;

    let resobj = await fetch(url,{
        method:"DELETE",
    });
     let data = resobj.json();
     console.log(data);

     alert ("Data Successfully deleted");
}
async function display (){
    let table = `
    <table>
    <tr>
    <th>Name</th>
    <th>age</th>
    <th>city</th>
    <th>Action</th>
    </tr>
    `;

    let url = "http://localhost:3000/student"

    let resobj = await fetch(url);
    console.log(resobj);

    let data = await resobj.json();
    console.log(data);

    data.map((key)=>{
        table+=
        `<tr>
        <td><input type="text value="${key.name}" id="nm-${key.id}" readonly></td>
        <td><input type="text value="${key.age}" id="age-${key.id}" readonly></td>
        <td><input type="text value="${key.city}" id="city-${key.id}" readonly></td>
        <td>
        <a onclick="recdel('${key.id}')"class="button button-delete">Delete</a>
        <a onclick="editrow('${key.id}')" class="button button-edit">Edit</a>
        <a class="button button-save">Save</a>
        `
    })
    table+=`</table>`
    document.getElementById("demo").innerHTML = table;
}
display();