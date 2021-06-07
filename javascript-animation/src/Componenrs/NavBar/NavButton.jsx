import React from 'react';


export const NavButton = (props) =>{

    return(
        <li>
            <a href={props.pageAddress}>
                {props.pageName}
            </a>
        </li>
    );
} 