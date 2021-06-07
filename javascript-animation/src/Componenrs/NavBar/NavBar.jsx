import React from 'react';
import {NavButton} from './NavButton';
import './NavBar.css';


export const NavBar = () =>{

    return(
      <ul>
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
      </ul>
     
    );



}