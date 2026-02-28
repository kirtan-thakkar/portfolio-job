"use client";
import{useState} from "react";
const ContactForm =()=>{
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log("Form Submitted");
        
    }
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:""
    });
    return(
        <div className="py-10"> 
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="text" placeholder="Enter your name" className="border border-gray-300 rounded-md p-2 w-full"></input>
                    <button className="bg-blue-500 px-4 py-1 cursor-pointer max-w-sm text-white rounded-md">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default ContactForm;