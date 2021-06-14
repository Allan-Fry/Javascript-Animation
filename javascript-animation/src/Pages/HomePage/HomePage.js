import React from 'react';
import "./HomePage.css";
import { Squire } from '../../Componenrs/Squire/Squire.jsx';
export const HomePage = () => {

    return(
        <div className="HomePageContainer">
            <div className="MessageBox Col">
                    <h2 className="Greating">Welcome!</h2>
                    <p>This is a website for me to practic animating in JS!</p>
            </div>
            <Squire className="Squire" />
        </div>
    );
};
