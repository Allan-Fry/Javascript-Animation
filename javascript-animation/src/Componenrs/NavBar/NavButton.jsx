import React from 'react';


export const NavButton = (props) =>{

    return(
        <li className="Nav">
            <a className="Nav" href={props.pageAddress}>
                {props.pageName}
            </a>
        </li>
    );
} 