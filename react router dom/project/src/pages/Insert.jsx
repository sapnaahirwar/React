import { useState } from "react";
import axios from "axios";

const Insert = () => {
    const [input, setInput] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((values) => ({ ...values, [name]: value }));
        console.log(input); // Debugging: Log the updated state
    };

    const handleSubmit = () => {
        const api = "http://localhost:3000/Student";

        axios.post(api, input)
            .then((res) => {
                alert("Data Saved!");
                setInput({}); // Clear the form after successful submission
            })
            .catch((err) => {
                console.error("Error saving data:", err);
                alert("Failed to save data. Please try again.");
            });
    };

    return (
        <>
            <h1>Insert Data</h1>
            <label>Enter Roll No:</label>
            <input type="text" name="rollno" onChange={handleInput} value={input.rollno || ""} />
            <br />
            <label>Enter Name:</label>
            <input type="text" name="name" onChange={handleInput} value={input.name || ""} />
            <br />
            <label>Enter City:</label>
            <input type="text" name="city" onChange={handleInput} value={input.city || ""} />
            <br />
            <label>Enter Fees:</label>
            <input type="text" name="fees" onChange={handleInput} value={input.fees || ""} />
            <br />
            <button onClick={handleSubmit}>Save Data</button>
        </>
    );
};

export default Insert;
