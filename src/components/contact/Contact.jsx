import "./contact.scss";
import emailjs from '@emailjs/browser';
import {useRef} from "react";
import { ContactMail , LinkedIn , GitHub} from "@material-ui/icons"

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_3zjscaz', form.current, 'JHjhInmVq5KbuEnM1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  } 
 
  return (
   
   <div  className='contact' id="contact">

    <div className="contact-header"> 
      <h1>Contact</h1>
      <ContactMail className="contact-logo"></ContactMail>
    </div>

    <div className="contact-wrapper"> 

   <form ref={form} action=""  onSubmit={sendEmail} >
    <h3>Contact Me </h3>
    <input type="text" id="name" placeholder="Your Name" name="name" required />
    <input type="email" id="email" placeholder="Email" name="email" required />
    <input type="text" id="phone" placeholder="Phone Number" name="phone" required />
    <input type="text" id="subject" placeholder="Subject" name="subject" />
    <textarea  id="message"  rows="4" name="message" placeholder="How can I help you?"> </textarea>
    <button type="submit">Send</button>
   </form>

   <div className="contact-net">
    <div className="linkedln">
        <LinkedIn className="logo-1"></LinkedIn>
        <a className="link-1" href="https://www.linkedin.com/in/abdulsamet-aybaz-b38828192/">Linkedln | abdulsamet-aybaz</a>
    </div>
    <div className="github">
        <GitHub className="logo-2"></GitHub>
        <a className="link-2" href="https://github.com/sametaybaz">Github | sametaybaz</a>
    </div>
   </div>

   </div>



    </div>


  )
}

export default Contact