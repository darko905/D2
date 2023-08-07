import React from 'react'
import Software from '../../assests/icons/web.png';
import WebDesign from '../../assests/icons/landing-page.png';
import Redesign from '../../assests/icons/redesign.png';
import Responsive from '../../assests/icons/responsive.png';
import Vector from '../../assests/icons/vector.png';
import Seo from '../../assests/icons/seo.png';

const Service = () => {
  return (
    <section className='section service' id='service'>
            <h2 className='section__title'>Naše usluge</h2>
            {/* <span className='section__subtitle'>MI NUDIMO REŠENJA PROBLEMA, A NE SAMO USLUGU</span> */}

            <div className='service__container container grid'>
                <div className='service__content'>
                    <div>
                        
                            {/* <RiComputerLine className='service__icons'/> */}
                            <img src={Software} alt="Software-icons" className='service__icons' />
                        
                        
                        <h3 className='service__title'>Izrada softvera za rad sa bazama podataka</h3>
                    </div>
                    <p className='service__descritpion'>Izrada različitih vrsta softwer-a za rad sa bazama podataka koje će poboljšati efikasnost vašeg poslovanja.</p>
                </div>
                <div className='service__content'>
                    <div>
                        
                    <img src={WebDesign} alt="Software-icons" className='service__icons' />
                       
                        <h3 className='service__title'>Izrada web sajtova</h3>
                    </div>
                    <p className='service__descritpion'>Napravićemo profesionalnu web stranicu, sa modernim dizajnom, koja će predstavljati Vaš biznis na najbolji mogući način.</p>
                </div>
                <div className='service__content'>
                    <div>
                              
                    <img src={Redesign} alt="Software-icons" className='service__icons' />
                       
                        <h3 className='service__title'>Redizajn web sajta</h3>
                    </div>
                    <p className='service__descritpion'>Ako je vašem sajtu potrebno osvežavanje, prilagođavanje za mobilne uređaje ili reorganizacija sadržaja, na pravom ste mestu.</p>
                </div>
                <div className='service__content'>
                    <div>
                        
                    <img src={Responsive} alt="Software-icons" className='service__icons' />
                        
                        <h3 className='service__title'>Responsive dizajn</h3>
                    </div>
                    <p className='service__descritpion'>Ukoliko želite da dizajn Vašeg web sajta izgleda podjednako dobro na svim uređajima, onda je responsive web sajt nešto o čemu morate da razmišljate.</p>
                </div>
                <div className='service__content'>
                    <div>
                        
                    <img src={Vector} alt="Software-icons" className='service__icons' />
                       
                        <h3 className='service__title'>Grafočki dizajn</h3>
                    </div>
                    <p className='service__descritpion'>Logo dizajn, manipulacija slika, baneri, flajeri, dizajn odeće,korice za knjige, jelovnici…</p>
                </div>
                <div className='service__content'>
                    <div>
                        
                    <img src={Seo} alt="Software-icons" className='service__icons' />
                        
                        <h3 className='service__title'>SEO internet prezentacija</h3>
                    </div>
                    <p className='service__descritpion'>Optimizacija za pretraživače (SEO) je skup radnji koji omogućava da se vaš sajt što bolje rangira.</p>
                </div>
            </div>
        </section>
  )
}

export default Service
