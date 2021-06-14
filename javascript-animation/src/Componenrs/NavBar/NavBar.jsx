import React from 'react';
import {NavButton} from './NavButton';
import './NavBar.css';
import Logo from '../../img/Logo.svg'

export const NavBar = () =>{

    return(
      <ul className="Nav">
                <img className="Logo" src={Logo} alt="Logo" />
               <NavButton 
               pageName="Home" 
               pageAddress="/" 
               />
               <NavButton 
               pageName="First Page" 
               pageAddress="/FirstPage" 
               />
               <NavButton 
               pageName="Land Scape" 
               pageAddress="/LandScape" 
               />  
               <NavButton 
               pageName="Links" 
               pageAddress="/Links" 
               />        
      </ul>
     
    );



}