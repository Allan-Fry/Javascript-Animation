import React from 'react';
import "./HomePage.css";
export const HomePage = () => {

    return(
        <div className="HomePageContainer">
            <div className="MessageBox">
                    <h2 className="Greating">Welcome!</h2>
                    <p>This is a website for me to practic animating in JS!</p>
            </div>
            <div>
                <h3>
                    Usefull Links.
                </h3>
                <table>
                    <tr>
                       <th><a></a></th>
                    </tr>
                </table>
            </div>
        </div>
    );
};