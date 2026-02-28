const ContactForm =()=>{
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log("Form Submitted");
        
    }
    return(
        <div className="py-10">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Enter Your Name</label>
                    <input id="name" type="text" placeholder="Enter your name" className="border border-gray-300 rounded-md p-2 w-full"></input>
                    <button className="bg-blue-500 px-4 py-1 cursor-pointer text-white rounded-md">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default ContactForm;