import React from 'react'
import { BiCodeBlock, BiMobile } from "react-icons/bi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdBrush } from "react-icons/md";
import { RiComputerLine, RiSettings5Line } from "react-icons/ri";

const Service = () => {
  return (
    <section className='section service' id='service'>
            <h2 className='section__title'>Naše usluge</h2>
            <span className='section__subtitle'>MI NUDIMO REŠENJA PROBLEMA, A NE SAMO USLUGU</span>

            <div className='service__container container grid'>
                <div className='service__content'>
                    <div>
                        <span className='ico__circle'>
                            <RiComputerLine className='service__icons'/>
                        </span>
                        
                        <h3 className='service__title'>IZRADA SOFTVERA ZA RAD SA BAZAMA PODATAKA</h3>
                    </div>
                    <p className='service__descritpion'>Izrada različitih vrsta softwer-a za rad sa bazama podataka koje će poboljšati efikasnost vašeg poslovanja.</p>
                </div>
                <div className='service__content'>
                    <div>
                        <span className='ico__circle'>
                            <BiCodeBlock className='service__icons'/>
                        </span>
                        <h3 className='service__title'>IZRADA WEB SAJTOVA</h3>
                    </div>
                    <p className='service__descritpion'>Napravićemo profesionalnu web stranicu, sa modernim dizajnom, koja će predstavljati Vaš biznis na najbolji mogući način.</p>
                </div>
                <div className='service__content'>
                    <div>
                        <span className='ico__circle'>      
                            <RiSettings5Line className='service__icons'/>
                        </span>
                        <h3 className='service__title'>REDIZAJN WEB SAJTA</h3>
                    </div>
                    <p className='service__descritpion'>Ako je vašem sajtu potrebno osvežavanje, prilagođavanje za mobilne uređaje ili reorganizacija sadržaja, na pravom ste mestu.</p>
                </div>
                <div className='service__content'>
                    <div>
                        <span className='ico__circle'>
                            <BiMobile className='service__icons'/>
                        </span>
                        <h3 className='service__title'>RESPONSIVE DIZAJN</h3>
                    </div>
                    <p className='service__descritpion'>Ukoliko želite da dizajn Vašeg web sajta izgleda podjednako dobro na svim uređajima, onda je responsive web sajt nešto o čemu morate da razmišljate.</p>
                </div>
                <div className='service__content'>
                    <div>
                        <span className='ico__circle'>
                            <MdBrush className='service__icons'/>
                        </span>
                        <h3 className='service__title'>GRAFIČKI DIZAJN</h3>
                    </div>
                    <p className='service__descritpion'>Logo dizajn, manipulacija slika, baneri, flajeri, dizajn odeće,korice za knjige, jelovnici…</p>
                </div>
                <div className='service__content'>
                    <div>
                        <span className='ico__circle'>
                            <TbBrandGoogleAnalytics className='service__icons'/>
                        </span>
                        <h3 className='service__title'>SEO INTERNET PREZENTACIJA</h3>
                    </div>
                    <p className='service__descritpion'>Optimizacija za pretraživače (SEO) je skup radnji koji omogućava da se vaš sajt što bolje rangira.</p>
                </div>
            </div>
        </section>
  )
}

export default Service
