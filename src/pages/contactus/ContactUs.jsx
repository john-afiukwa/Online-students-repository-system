import React from "react";

import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import * as BsIcons from "react-icons/bs";
import SectionHead from "../../UI/SectionHead";

import "./contactus.css";
import { useState } from "react";
// import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const valuesChangeHandler = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmailHandler = (e) => {
    e.preventDefault();
    emailjs
      .send("service_yes7rba", "template_fwvipme", values, "ycZzHwO3bwOc0lNxG")
      .then(
        (response) => {
          console.log("SUCCESS", response);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="container review__submit-container">
        <div className="section__head-container">
          <SectionHead icon={<HiIcons.HiOutlineMail />} title="Contact Us" />
        </div>

        <div className="contact__wrapper">
          <div className="media">
            <h3>
              Check out our pages <span>&#8595;</span>
            </h3>
            <div className="media__links">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaIcons.FaFacebookF />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiIcons.AiOutlineTwitter />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiIcons.AiFillInstagram />
              </a>
            </div>
          </div>

          <div className="contact__form-container">
            <h3>Send us a Direct Mail</h3>
            <form className="contact-form" onSubmit={sendEmailHandler}>
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullName"
                  className="form-control"
                  onChange={valuesChangeHandler}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                  onChange={valuesChangeHandler}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  onChange={valuesChangeHandler}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  cols="30"
                  rows="10"
                  className="form-control"
                  onChange={valuesChangeHandler}
                ></textarea>
              </div>

              <div className="form-group mail__btn-container">
                <button
                  className="btn lg mail-btn"
                  type="submit"
                  // onClick={modalHandler}
                >
                  Send Mail <IoIcons.IoSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* {openModal && (
        <Modal
          title="SUCCESS"
          icon={<BsIcons.BsFillCheckCircleFill />}
          message="Mail sent successfully"
          closeModal={setOpenModal}
        />
      )} */}
    </section>
  );
};

export default ContactUs;
