const ContactForm =()=>{
    return(
        <div className="py-10">
            <form>
                <div>
                    <label htmlFor="name">Enter Your Name</label>
                    <input id="name" type="text" placeholder="Enter your name" className="border border-gray-300 rounded-md p-2 w-full"></input>
                </div>
            </form>
        </div>
    )
}
export default ContactForm;