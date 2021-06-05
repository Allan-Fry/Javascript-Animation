import React from 'react';
import { Container } from 'reactstrap';
import BackCloud from '../../img/BackCloud.svg';
import MidCloud from '../../img/MidCloud.svg';
import FrontCloud from '../../img/FrontCloud.svg';
import Mountains from '../../img/Mountains.svg';
import anime from 'animejs/lib/anime.es.js';
import './LandScapePage.css';

anime({
    targets: '.MidImage',
    translateX: 1000,
    loop: true,
    duration: 25000,
    easing: 'linear',
})

export const LandScapePage = () =>{


    return(
        <Container className="Warp">
            <img className="TopImage" alt="The back most cloud" src={BackCloud} />
            <img className="MidImage" alt="The middle most cloud" src={MidCloud} />
            <img className="FrontImage" alt="The front most cloud" src={FrontCloud} />
            <img className="Mountains" alt="Background Mountains" src={Mountains} />
        </Container>
    );
}