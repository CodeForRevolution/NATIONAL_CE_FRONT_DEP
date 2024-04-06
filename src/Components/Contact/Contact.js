import React from "react";
import style from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.container}>
        <div className={style.left}>
          <h2>Contact us </h2>
          <input type="text" name="" id="" placeholder="Name" />{" "}
          <input type="text" name="" id="" placeholder="Phone Number" />{" "}
          <input type="email" name="" id="" placeholder="Email" />{" "}
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>{" "}
          <button >Send message</button>

       
        </div>

        <div className={style.right}>

        <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505.6202131630608!2d79.11563844070251!3d21.176425600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c75d16406bcf%3A0xfdba103ef7c420aa!2sALI%2CS%20SPOKEN%20CLASSES!5e1!3m2!1sen!2sin!4v1696620308754!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
      
        </div>
      </div>
    </div>
  );
};

export default Contact;



