import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_r6fwoup",
      "template_i3gye5n",
      form.current,
      "os3OQ461k88uDA9mY"
    );
    e.target.reset();
  };

  const showToastMessage = () => {
    toast.success("Uspešno poslato !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <section className="section contact" id="contact">
      <h2 className="section__title">Kontakt</h2>

      <div className="contact__container container grid">
        <div className="contact__content">
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Vaše ime"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Vaš email"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="number"
                name="number"
                className="contact__form-input"
                placeholder="Broj telefona"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Vaša poruka..."
              ></textarea>
            </div>
            
            <button onClick={showToastMessage} className="button button-flex">
              Posaljite
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
