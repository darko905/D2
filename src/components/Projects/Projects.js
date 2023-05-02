import React from 'react'
import Projekat1  from '../../assests/project-1.png'

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <h2 className="section__title">Projekti</h2>
      <span className="section__subtitle">Pogledajte neke od naših projekata</span>
      <div className="projects__container container grid">
        <div className="projects__content">
            <div>
                <img src={Projekat1} alt="Projekat_1" />
            </div>
            <h2 className='projects__title'>Restoran Maddox</h2>
            <h3 className='projects__subtitle'>Html,css</h3>
            <p className='projects__descritpion'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, totam.</p>
            <button className='button button-flex'>View</button>
        </div>
        <div className="projects__content">
            <div>
                <img src={Projekat1} alt="Projekat_1" />
            </div>
            <h2 className='projects__title'>Restoran Maddox</h2>
            <h3 className='projects__subtitle'>Html,css</h3>
            <p className='projects__descritpion'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, totam.</p>
            <button className='button button-flex'>View</button>
        </div>
        <div className="projects__content">
            <div>
                <img src={Projekat1} alt="Projekat_1" />
            </div>
            <h2 className='projects__title'>Restoran Maddox</h2>
            <h3 className='projects__subtitle'>Html,css</h3>
            <p className='projects__descritpion'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, totam.</p>
            <button className='button button-flex'>View</button>
        </div>
      </div>
    </section>
  )
}

export default Projects
