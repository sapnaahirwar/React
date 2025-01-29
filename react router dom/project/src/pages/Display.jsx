import axios from "axios";
import { useEffect, useState } from "react";

const Display = () => {
    const [mydata, setMydata] = useState([]);

    const loadData = () => {
        const api = "http://localhost:3000/Student";
        axios
            .get(api)
            .then((res) => {
                console.log(res.data);
                setMydata(res.data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    };

    useEffect(() => {
        loadData();
    }, []);

    const ans = mydata.map((key, index) => (
        <tr key={index}>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
        </tr>
    ));

    return (
        <>
            <h1>Display Data</h1>
            <table width="400" border="1" bgcolor="purple" >
                <thead>
                    <tr bgcolor="black">
                        <th>Roll no</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Fees</th>
                    </tr>
                </thead>
                <tbody>{ans}</tbody>
            </table>
        </>
    );
};

export default Display;
