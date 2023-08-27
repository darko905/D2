import React from 'react'
import Logo from '../../assests/D2_Logo.png';
import { Link } from "react-router-dom";
import Image1 from '../../assests/icons/phone.png'
import Image2 from '../../assests/icons/instagram.png'
import Image3 from '../../assests/icons/gmail.png'


const Footer = () => {
    const today = new Date();
  const year = today.getFullYear();
  return (
    <>
    <footer className="section footer">
    <div className="container">
      <div className="footer__content">
        <ul className="footer__content-1">
          <li>
            <img src={Logo} alt="Logo" />
          </li>
        </ul>

        <ul className="footer__content-2">
          <li>Usluge</li>
          <li>
            
          Izrada softvera
          </li>
          <li>
            
          Izrada web sajtova
          </li>
          <li>
         
          Redizajn web sajta
          </li>
          <li>SEO internet prezentacija</li>
        </ul>

        <ul className="footer__content-2">
          <li>Kontakt</li>
          <li>
            <Link to="tel:+3816669051258">
              <img src={Image1} alt="Phone icons" className="footer__content-2_icons"/>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={Image2} alt="Instagram icons" className="footer__content-2_icons"/>
              
            </Link>
          </li>
          <li>
          <Link to="d2dev@gmaiil.com">
          <img src={Image3} alt="Email icons" className="footer__content-2_icons"/>
              
            </Link>
            
             
          </li>
        </ul>
      </div>
      <div className="copyright-text">
        <p>
          Copyright &copy; {year}, All Right Reserved SajtIzrada
         
        </p>
      </div>
    </div>
  </footer>
  </>
  )
}

export default Footer
