import React from "react";
import { Link } from "react-router-dom";
import logo  from './images/logo.png'
import navOutside from './images/Outside.jpg'
import navInside from './images/Inside.jpg'
import navQa from './images/Q+A.jpg'
import navLicensing from './images/Licensing.jpg'
import navShows from './images/Shows.jpg'
import navHotel from './images/Hotel.jpg'

// navigation bar
const NavigationBar = () => {
    return (
        <div className="navigationBar">
           <Link className="navLink" exact to="/"><img src={logo} alt="Logo" /></Link>
           <Link className="navLink" to="/outside"><img src={navOutside} alt="Logo" /></Link>
           <Link className="navLink" to="/inside"><img src={navInside} alt="Logo" /></Link>
           <Link className="navLink" to="/Q+A"><img src={navQa} alt="Logo" /></Link>
           <Link className="navLink" to="/licensing"><img src={navLicensing} alt="Logo" /></Link>
           <Link className="navLink" to="/shows"><img src={navShows} alt="Logo" /></Link>
           <a href="https://walledoffhotel.com/"><img src={navHotel} alt="Logo" /></a>
           <a id="originalLink" href="http://banksy.co.uk/index.html">Original</a>

           
        </div>
    )
}

export default NavigationBar;