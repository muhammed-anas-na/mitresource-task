import { useState } from "react"

export default function Validator(){
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const [error, setError] = useState({
        name: "",
        phone: "",
        email: ""
    })

    function check(){
        const nameRegex = /^[a-zA-Z ]{2,30}$/;  // Allows letters and spaces, between 2 and 30 characters
        const phoneRegex = /^\d{10}$/;          // Exactly 10 digits
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email format

        let newErrors = { name: "", phone: "", email: "" };

        // Validate Name
        if (!nameRegex.test(data.name)) {
            newErrors.name = "Invalid name. Must be 2-30 characters long and only letters.";
        }

        // Validate Phone
        if (!phoneRegex.test(data.phone)) {
            newErrors.phone = "Phone number must be exactly 10 digits.";
        }

        // Validate Email
        if (!emailRegex.test(data.email)) {
            newErrors.email = "Invalid email format.";
        }

        setError(newErrors);

        // Optionally, log the validated data or do something on successful validation
        if (newErrors.name === "" && newErrors.phone === "" && newErrors.email === "") {
            console.log("Form data is valid:", data);
        }
    }

    return (
        <div className="bg-slate-300 absolute right-0 h-screen p-5 w-[30%] flex flex-col justify-start">
            <h1 className="text-xl font-bold">Form Validator</h1>

            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                value={data.name} 
                onChange={(e) => setData({ ...data, name: e.target.value })} 
            />
            {error.name && <span className="text-red-500">{error.name}</span>}

            <label htmlFor="phone">Phone Number</label>
            <input 
                type="text" 
                value={data.phone} 
                onChange={(e) => setData({ ...data, phone: e.target.value })} 
            />
            {error.phone && <span className="text-red-500">{error.phone}</span>}

            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                value={data.email} 
                onChange={(e) => setData({ ...data, email: e.target.value })} 
            />
            {error.email && <span className="text-red-500">{error.email}</span>}

            <button className="bg-green-900 text-white my-10 py-3" onClick={check}>Check</button>
        </div>
    )
}
