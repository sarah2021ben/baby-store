import React from 'react';
import {  Link } from "react-router-dom";
import './Footer.css'

function Footer(props) {
    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
    return (
        <div className='footer' >
           <span>©</span> 
           <span>{getCurrentYear()}</span> 
           <span className='siteurl'> <Link to="/">Baby Store</Link></span> 
            <span>.All rights reserved</span> 
        </div>
    );
}

export default Footer;