import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button.jsx";
import "../UI/Button/Button.css";
import youAreNotAloneHeader from "../../assets/HeaderHero.png";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>You are not Alone</span>
            <span>You are Seen</span>
            <span>You are Loved</span>
            <span>You are Heard</span>
          </h1>
          <p className="u-text-small">
            FANCIED STORY NETWORK (FSN) is an upcoming social
            movement which was formed on March 3rd 2022.The movement
            was formed initially as a form of self-expression on the lack of
            awareness on the general mental health state of our society on a
            day-to-day basis.It is steadily growing both locally and
            internationally with a current membership of more than 140 +
            members.
          </p>
          <div className="header-cta">
            <Button text={"Join us"} btnClass={"btn-dark"} href={"#"} />
            <Button text={"Contact Us"} btnClass={"btn-light"} href={"#"} />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={youAreNotAloneHeader} alt="You are not Alone" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
