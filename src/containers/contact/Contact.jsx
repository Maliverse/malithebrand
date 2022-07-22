
import './contact.css'
import React, { useRef } from 'react';
import  emailjs  from '@emailjs/browser';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2c6b24p', 'template_60npota', form.current, '6D6wS3TLqHt9gjYYQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }); 
    e.target.reset()
    }
   

    return ( <div className='contact-container' id='Contact'>

        <h1>Contact Me</h1>

        <div className='form-container'>
            
        
        <form ref={form} onSubmit={sendEmail}>
        <label for="name">Name</label>
        <input type="text" placeholder='Name' name="name" />
        <label for="email">Email</label>
        <input type="email" id="email" placeholder='Email'  required="" 
        title="Not Valid" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" name="email" />
        
        <label for="message">Message</label>
        <textarea className='message-field' type="text" placeholder='Your Message Here' name="message" />
         <button className='jello-horizontal' >Send message</button>
        </form>

       
        </div>

    </div> );
}
 
