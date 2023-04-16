import React from "react";
import AboutImg from "../../assests/aboutImg.webp";

const About = () => {
  return (
    <section className="section about" id="about">
      <h2 className="section__title">ZAŠTO BAŠ MI?</h2>
      <span className="section__subtitle">D2 DESIGN</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="About_image" className="about__img" />
        <div className="about__data">
          <h3 className="about__title">KREATIVNOST</h3>
          <p className="about__subtitle">
            Uvek smo u potrazi za novim izazovima. Oni nas inspirišu.
          </p>
          <p className="about__descritpion">
            Sve naše ideje stoje vam na raspolaganju! Vašem biznisu potrebna je
            naša kreativnost, a našoj kreativnost potreban je vaš biznis.
          </p>

          <h3 className="about__title">ISKUSTVO</h3>
          <p className="about__subtitle">
            Ne postojimo od juče. Tu smo već 5 godina.
          </p>
          <p className="about__descritpion">
            Naše iskustvo sa klijentima iy najrazličitijih sfera poslovanja,
            biće vam od značajne koristi pri odabiiru poslovne strategiie
            idealne za vaš brend.
          </p>

          <h3 className="about__title">TRANSPARENSTNOST</h3>
          <p className="about__subtitle">
            Najviše vrednujemo transparentan rad. Kao i otvoren, prijateljski
            odnos.
          </p>
          <p className="about__descritpion">
            U radu sa nama imaćete pristum svim vašim nalozima za oglašavanje, i
            kompletnu kontrolu nas raspodelom budzeta i njegovom potrošnjom.
          </p>
          {/* <a href='#contact'>
                        <button className='button button--flex'>
                            
                            Kontakt
                        </button>
                    </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
