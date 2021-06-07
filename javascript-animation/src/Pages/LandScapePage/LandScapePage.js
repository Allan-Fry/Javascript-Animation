import React from 'react';
import { Col, Container, Media, Row } from 'reactstrap';
import BackCloud from '../../img/BackCloud.svg';
import MidCloud from '../../img/MidCloud.svg';
import FrontCloud from '../../img/FrontCloud.svg';
import Mountains from '../../img/Mountains.svg';
import Bg1 from '../../img/Bg1.svg';
import anime from 'animejs/lib/anime.es.js';
import './LandScapePage.css';

anime({
    targets: '.MidImage',
    translateX: 1000,
    loop: true,
    duration: 7000,
    easing: 'linear',
})

export const LandScapePage = () =>{


    return(
        <Container className="Warp">
           <Row className="RealativeBox">
                <Col>
                    <Media className="Clipper" alt="" scr={Bg1}></Media>
                    <Media className="TopImage" alt="The back most cloud" src={BackCloud} />
                    <Media className="MidImage" alt="The middle most cloud" src={MidCloud} />
                    <Media className="FrontImage" alt="The front most cloud" src={FrontCloud} />
                    <Media className="Mountains" alt="Background Mountains" src={Mountains} />
                </Col>
            </Row>
       </Container>
    );
}