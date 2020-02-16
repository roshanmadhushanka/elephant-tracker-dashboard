import React from 'react';
import {NavLink} from "react-router-dom";

const PageLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/elephantSummary">Elephant Summary</NavLink></li>
        </ul>
    )
};

export default PageLinks;