import { Link } from "react-router";

const About = () =>
    {
        return(
            <>
           <h1>This is about Pages</h1>
           <table>
           <tr>
          <td>
            <Link to="aboutcompany">AboutCompany</Link>
            <Link to="aboutservice">AboutService</Link>
            <Link to="aboutcontact">AboutContact</Link>
          </td>
          <td>
            <Outlet/>
          </td>
        </tr>
           </table>
            </>
        );
    
    }
    export default About;