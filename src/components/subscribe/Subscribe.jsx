import React, { useEffect } from "react";
import "./Subscribe.css";
import { TiMail } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const emailRegex =()=>
  {
    // let emailAddress=getElementbyId
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test("jjj@gmail.com"))
    {
      return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)

  }
  const  formHandle=()=>
  {

  }
  return (
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
        <h2>Talk to us now!</h2>
        <form name={"contactForm"}>
          <div className="form-control">
            <p>Name:</p>
            <input type="name" id="name" required={true}  />
            <br/>
            <p>Email:</p>
            <input type="email" id="useremail" className={"email"} required={true}  />
            <br/>

            <p>Message:</p>
            <input type="text" id="message" className={"message"} required={true} />

            <br/>
            <button>Send</button>{/*add func for form handling*/}
          </div>
        </form>
        <div className="social-icons">
          <a className="social-icon">
            <TiMail />
          </a>
          <a className="social-icon">
            <FaFacebookF />
          </a>
          <a className="social-icon">
            <FaTwitter />
          </a>
          <a className="social-icon">
            <FaInstagram />
          </a>
          <a className="social-icon">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
