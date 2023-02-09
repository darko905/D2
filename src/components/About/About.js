import React from 'react'
import AboutImg from '../../assests/aboutImg.webp';

const About = () => {
  return (
    <section className='section about' id='about'>
            <h2 className='section__title'>O NAMA</h2>
            <span className='section__subtitle'>D2 DESIGN</span>
            <div className='about__container container grid'>
                
                <img src={AboutImg} alt='About_image' className="about__img"/>
                <div className='about__data'>
                    <h3 className='about__title'>PROFESIONALNO MENJAMO DIGITALNI PEJZAŽ SVETA, FIRMU PO FIRMU.</h3>
                    <p className='about__descritpion'>
                    Agencija za digitalni marketing sa sedištem u Užicu. Koja se bavi pružanjem širokog spektra usluga iz oblasti digitalnog marketinga. Naš tim čine iskusni dizajneri i programeri koji će učiniti sve da vaše ideje pretvore u realnost.
                    Sve zahteve klijenata shvatamo ozbiljno i trudimo se da svakim rešenjem prevaziđemo očekivanja i učinimo da naše rešenje pozitivno utiče na vaš biznis.
                    Primarni cilj je da svaki budući klijent postane deo zajednice gde ćemo zajedno graditi i unapređivati naše poslovanje u svim pravcima.
                    </p>
                    <a href='#contact'>
                        <button className='button button--flex'>
                            {/* Kontakt <MdPhoneEnabled/> */}
                            Kontakt
                        </button>
                    </a>
                </div>
                
                
            </div>
                
        </section>
  )
}

export default About
