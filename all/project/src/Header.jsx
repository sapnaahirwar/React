// const Header = (props) =>{
//     console.log(props);
//     return (
//         <>
//         <h1>I am  {props.name} Component</h1>
//         </>
//     );
// };
function Header(props){
    console.log(props); 
    return (
        <>
        <h1>Hello i am {props.data.name} my attendance is {props.data.attendance} and intrest {props.data.intrest}</h1>
        <h1>Hello i am {props.data.other} my attendance is {props.data.other} and intrest {props.data.other}</h1>

        {/* <h1>I am {props.data.name} and i am {props.data.age} year old and i live in{props.data.city}</h1>
        <h2>my course is{props.new.course} and batch is{props.new.batch} and language is{props.new.language}</h2> */}
        </>
    );
}

export default Header;













