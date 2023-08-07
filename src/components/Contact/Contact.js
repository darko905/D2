import React from "react";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <h2 className="section__title">Kontakt</h2>

      <div className="contact__container container grid">
        <div className="contact__content">
          <form className="contact__form">
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
            <button className="button button-flex">Posaljite</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
