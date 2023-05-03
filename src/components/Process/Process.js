import React from 'react'
import { BsPeopleFill } from "react-icons/bs"; 
import { GrPlan } from "react-icons/gr"; 
import { AiFillProject } from "react-icons/ai"; 

const Process = () => {
  return (
    <section className='section process' id='process'>
            <h2 className='section__title'>Kako izgleda proces saradnje?</h2>
            <span className='section__subtitle'>OD IDEJE DO REALIZACIJE...</span>

            <div className='process__container container grid'>
                <div className="process__content"> 
                    <div>
                        <h3 className='process__title'> <BsPeopleFill className='process__icons'/>1. Besplatna konsultacija</h3>
                    </div>
                    <p className='process__descritpion'>Prvi korak u saradnji sa nama je konsultacija, gde cete nam izneti Vase zahteve a mi cemo Vam ponuditi resenja. </p>
                </div>

                <div className="process__content"> 
                    <div>
                        <h3 className='process__title'> <GrPlan className='process__icons'/>2. Izrada plana</h3>
                    </div>
                    <p className='process__descritpion'>Nakon konsulracija i analize zahteva izradjujemo plan koji ce najvise odgovarati Vasim ciljevima i potrebama.</p>
                </div>

                <div className="process__content"> 
                    <div>
                        <h3 className='process__title'> <AiFillProject className='process__icons'/>3. Realizacija projekta</h3>
                    </div>
                    <p className='process__descritpion'>Nakon sto je postignut dogovor, zapocinjemo realizaciju projekta. Bicete obavesteni o toku napretka svakog projekta.</p>
                </div>
            </div>
        </section>
  )
}

export default Process
