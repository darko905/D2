import React from "react";

import Talking from '../../assests/icons/talking.png'
import Task from '../../assests/icons/task.png'
import Developer from '../../assests/icons/developer.png'

const Process = () => {
  return (
    <section className="section process" id="process">
      <h2 className="section__title">Od ideje do realizacije</h2>
      

      <div className="process__container container grid">
        <div className="process__content">
          <img src={Talking} alt="Talking-icons" className="process__icons" />
          <div>
            <h3 className="process__title">Besplatna konsultacija</h3>
          </div>
          <p className="process__descritpion">
            Prvi korak u saradnji sa nama je konsultacija, gde cete nam izneti
            Vase zahteve a mi cemo Vam ponuditi resenja.{" "}
          </p>
        </div>

        <div className="process__content">
        <img src={Task} alt="Task-icons" className="process__icons" />
          <div>
            <h3 className="process__title">Izrada plana</h3>
          </div>
          <p className="process__descritpion">
            Nakon konsulracija i analize zahteva izradjujemo plan koji ce
            najvise odgovarati Vasim ciljevima i potrebama.
          </p>
        </div>

        <div className="process__content">
        <img src={Developer} alt="Developer-icons" className="process__icons" />
          <div>
            <h3 className="process__title">Realizacija projekta</h3>
          </div>
          <p className="process__descritpion">
            Nakon sto je postignut dogovor, zapocinjemo realizaciju projekta.
            Bicete obavesteni o toku napretka svakog projekta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
