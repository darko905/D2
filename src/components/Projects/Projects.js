import React from "react";
import Projekat1 from "../../assests/project-1.png";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <h2 className="section__title">Naši Projekti</h2>

      <div className="projects__container container grid">
        <div className="projects__content">
          <div>
            <img src={Projekat1} alt="Projekat_1" />
          </div>
          <h2 className="projects__title">Restoran Maddox</h2>
          <div className="projects__tools">
            <p className="projects__tools-text">Html</p>
            <p className="projects__tools-text">Css</p>
            <p className="projects__tools-text">JavaScript</p>
          </div>
          <p className="projects__descritpion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            autem esse fugiat voluptates! Soluta qui sunt, corrupti, rem unde
            quos odio tenetur doloremque enim, magnam ut blanditiis molestiae
            excepturi id.
          </p>
          <button className="button__read-more">
            Link Projekta <FiArrowUpRight />
          </button>
        </div>
        <div className="projects__content">
          <div>
            <img src={Projekat1} alt="Projekat_1" />
          </div>
          <h2 className="projects__title">Restoran Maddox</h2>
          <div className="projects__tools">
            <p className="projects__tools-text">Html</p>
            <p className="projects__tools-text">Css</p>
            <p className="projects__tools-text">JavaScript</p>
          </div>

          <p className="projects__descritpion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            autem esse fugiat voluptates! Soluta qui sunt, corrupti, rem unde
            quos odio tenetur doloremque enim, magnam ut blanditiis molestiae
            excepturi id.
          </p>
          <button className="button__read-more">
            Link Projekta <FiArrowUpRight />
          </button>
        </div>
        <div className="projects__content">
          <div>
            <img src={Projekat1} alt="Projekat_1" />
          </div>
          <h2 className="projects__title">Restoran Maddox</h2>
          <div className="projects__tools">
            <p className="projects__tools-text">Html</p>
            <p className="projects__tools-text">Css</p>
            <p className="projects__tools-text">JavaScript</p>
          </div>
          <p className="projects__descritpion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            autem esse fugiat voluptates! Soluta qui sunt, corrupti, rem unde
            quos odio tenetur doloremque enim, magnam ut blanditiis molestiae
            excepturi id.
          </p>
          <button className="button__read-more">
            Link Projekta <FiArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
