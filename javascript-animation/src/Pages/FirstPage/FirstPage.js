import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import anime from 'animejs/lib/anime.es.js';
import './FirstPage.css';

anime({
    targets: '.squire',
    translateX: 250,
    rotateZ: 360,
    scale: 3,
    duration: 5000,
    loop: true,
    easing: 'linear',
    direction: 'alternate'

  });

export const FirstPage = () =>{

return(
    <Container>
        <Row>
            <Col className='squire'>
                FirstPage
            </Col>
        </Row>
    </Container>
);
};