import React from 'react';
import { LinkBox } from '../../Componenrs/LinkBox/LinkBox.jsx';
import "./HomePage.css";
export const HomePage = () => {

    return(
        <div className="HomePageContainer">
            <div className="MessageBox Col">
                    <h2 className="Greating">Welcome!</h2>
                    <p>This is a website for me to practic animating in JS!</p>
            </div>
            <div className="LinkBox Col">
                <h3 className="LinkBox">
                    Usefull Links.
                </h3>
                <LinkBox 
                linkAddress="https://animejs.com/"
                linkName="Anime.js"
                ></LinkBox>
            </div>
        </div>
    );
};