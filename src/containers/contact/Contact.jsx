import './contact.css'

const Contact = () => {


   

    return ( <div className='contact-container' id='Contact'>

        <h1>Contact Me</h1>

        <div className='form-container'>
            
        
        <form>
        <label for="name">Name</label>
        <input type="text" placeholder=" Enter name" />
        <label for="email">Email</label>
        <input type="email" id="email"  required="" 
        title="Not Valid" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" placeholder="Enter email" />
        
        <label for="message">Message</label>
        <textarea className='message-field' type="text" placeholder="Type your message here..." />
         <button className='jello-horizontal'>Send message</button>


        </form>

       
        </div>

    </div> );
}
 
export default Contact;