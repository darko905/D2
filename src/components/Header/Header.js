import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Logo from '../../assests/D2_Logo.png';

const Header = () => {
    window.addEventListener('scroll', function(){
        const header = this.document.querySelector('.header');

        if(this.scrollY >= 80) {
            header.classList.add('scroll-header')
        }
        else{
            header.classList.remove('scroll-header');
        }
    })

    const [Toogle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');
  return (
    <header className='header'>
            <nav className='nav container'>
                <a href='#home' className='nav__logo'>
                    <img src={Logo} alt="Logo" className='nav__logo-img'/>
                </a>

                <div className={Toogle ? "nav__menu show-menu": "nav__menu"}>
                    <ul className='nav__list '>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                HOME
                            </a>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                ABOUT
                            </a>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='#service' onClick={() => setActiveNav('#service')} className={activeNav === "#service" ? "nav__link active-link" : "nav__link"}>
                                SERVICES
                            </a>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === "#project" ? "nav__link active-link" : "nav__link"}>
                                PROJECTS
                            </a>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                CONTACT
                            </a>
                        </li>
                    </ul>
                    
                    
                    <MdClose className="nav__close" onClick={()=> showMenu(!Toogle)}/>
                    
                </div>

                <div className='nav__toggle' onClick={()=> showMenu(!Toogle)}>
                    <FaBars/>
                </div>
            </nav>
        </header>
    )
}

export default Header
