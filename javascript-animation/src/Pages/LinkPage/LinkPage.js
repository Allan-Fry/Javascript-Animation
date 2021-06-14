import React from 'react';
import { LinkBox } from '../../Componenrs/LinkBox/LinkBox.jsx';


export const LinkPage = () =>{

    return(
        <div className="LinkPageContainer">
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


}