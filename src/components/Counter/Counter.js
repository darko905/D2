import React from 'react'
import { MdDone } from "react-icons/md";
import { AiTwotoneCalendar } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
const Counter = () => {
  return (
    <section className='section counter'>
        
      <div className="counter__container container grid">
      
        <div className="counter__content">
            <div>
                <span className='ico__circle'>
                    <MdDone className='service__icons'/>
                </span>
                
                <h3 className='counter__title'>25</h3>
            </div>
            <p className='counter__descritpion'>ZAVRSENIH RADOVA</p>
        </div>
        <div className="counter__content">
        <div>
                <span className='ico__circle'>
                    <AiTwotoneCalendar className='service__icons'/>
                </span>
                
                <h3 className='counter__title'>5</h3>
            </div>
            <p className='counter__descritpion'>GODINA ISKUSTVA</p>
        </div>
        <div className="counter__content">
        <div>
                <span className='ico__circle'>
                    <IoIosPeople className='service__icons'/>
                </span>
                
                <h3 className='counter__title'>25</h3>
            </div>
            <p className='counter__descritpion'>ZAVRSENIH RADOVA</p>
        </div>
      </div>
    </section>
  )
}

export default Counter
