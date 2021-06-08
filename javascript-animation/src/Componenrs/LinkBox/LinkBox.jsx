import React from 'react';
import './LinkBox.css';

export const LinkBox = (props) =>{

    return(
        <div className="LinkStack">
            <a 
            className="LinkBox" 
            href={props.linkAddress}
            target='_blank'
            rel="noopener noreferrer">
                {props.linkName}
            </a>
        </div>
    );
}