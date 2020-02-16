import React from 'react';
import {NavLink} from "react-router-dom";


const SignedInLinks = () => {
  return(
      <ul className="right">
          <li><NavLink to="/" className="btn btn-floating teal lighten-1">AD</NavLink></li>
      </ul>
  )
};

export default SignedInLinks;