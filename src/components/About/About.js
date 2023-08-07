import React from "react";
import AboutImg from "../../assests/circled2.png";

import { BsCheckCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <section className="section about" id="about">
      <h2 className="section__title">Zašto baš mi?</h2>
      <span className="section__subtitle">Pružamo usluge na jednom mestu</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="About_image" className="about__img" />
        <div className="about__data">
          <div className="about__data-info">
            <div className="about__data-info-left">
              <BsCheckCircleFill />
              <span className="about__data-icon-button-shape"></span>
            </div>
            <div className="about__data-info-right">
              <h3 className="about__title">Kreativnost</h3>

              <p className="about__descritpion">
                Sve naše ideje stoje vam na raspolaganju! Vašem biznisu potrebna
                je naša kreativnost, a našoj kreativnost potreban je vaš biznis.
              </p>
            </div>
          </div>

          <div className="about__data-info">
            <div className="about__data-info-left">
              <BsCheckCircleFill />
              <span className="about__data-icon-button-shape"></span>
            </div>
            <div className="about__data-info-right">
              <h3 className="about__title">Iskustvo</h3>

              <p className="about__descritpion">
                Naše iskustvo sa klijentima iy najrazličitijih sfera poslovanja,
                biće vam od značajne koristi pri odabiiru poslovne strategiie
                idealne za vaš brend.
              </p>
            </div>
          </div>
          <div className="about__data-info">
            <div className="about__data-info-left">
              <BsCheckCircleFill />
              {/* <span className="about__data-icon-button-shape"></span> */}
            </div>
            <div className="about__data-info-right">
              <h3 className="about__title">Transparentnost</h3>

              <p className="about__descritpion">
                U radu sa nama imaćete pristum svim vašim nalozima za
                oglašavanje, i kompletnu kontrolu nas raspodelom budzeta i
                njegovom potrošnjom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
