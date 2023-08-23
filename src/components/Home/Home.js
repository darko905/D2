import React from "react";


const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container ">
        <div className="home__content ">
          <div className="home__data">
            <h1 className="home__title">
              WEB <br /> <span className="home__title-stroke">DESIGN</span>{" "}
              <br /> AGENCY
            </h1>
            <a href="#contact">
              <button className="button button-flex">Contact</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
