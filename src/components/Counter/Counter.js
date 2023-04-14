import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import { AiTwotoneCalendar } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Counter = () => {
    const [counterStart, setCounterStart] = useState(false);
  return (
    <section className="section counter">
      <div className="counter__container container grid">
        <ScrollTrigger onEnter={()=> setCounterStart(false)} onExit={()=> setCounterStart(true)}>
        <div className="counter__content">
          <div>
            <span className="ico__circle">
              <MdDone className="counter__icons" />
            </span>

            <h3 className="counter__title">
                {counterStart && 
                <CountUp start={0} end={25} duration={4} delay={0}/>
                }
                
            </h3>
          </div>
          <p className="counter__descritpion">ZAVRSENIH RADOVA</p>
        </div>
        </ScrollTrigger>


        <ScrollTrigger onEnter={()=> setCounterStart(true)} onExit={()=> setCounterStart(false)}>
        <div className="counter__content">
          <div>
            <span className="ico__circle">
              <AiTwotoneCalendar className="counter__icons" />
            </span>
           
            <h3 className="counter__title">
            {counterStart && 
            <CountUp start={0} end={5} duration={4} delay={0}/>}
            
            </h3>
          </div>
          <p className="counter__descritpion">GODINA ISKUSTVA</p>
        </div>
        </ScrollTrigger>
        <ScrollTrigger onEnter={()=> setCounterStart(true)} onExit={()=> setCounterStart(false)}>
        <div className="counter__content">
          <div>
            <span className="ico__circle">
              <IoIosPeople className="counter__icons" />
            </span>

            <h3 className="counter__title">
                {counterStart && 
                 <CountUp start={0} end={20} duration={4} delay={0}/>
                }
               
            </h3>
          </div>
          <p className="counter__descritpion">UKUPNO KLIJENATA</p>
        </div>
        
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default Counter;
