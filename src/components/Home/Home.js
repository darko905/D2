import React from "react";


const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container ">
        <div className="home__content ">
          <div className="home__data">
            <h1 className="home__title">
              WEB <br /> <span className="home__title-stroke">DIZAJN</span>{" "}
              <br /> AGENCIJA
            </h1>
            <a href="#contact">
              <button className="button button-flex">Kontakt</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
