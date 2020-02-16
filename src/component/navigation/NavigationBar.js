import React from 'react';
import {Link} from 'react-router-dom';
import PageLinks from "./PageLinks";
import SignedInLinks from "./SignedInLinks";
import './NavigationBar.css';

const NavigationBar = () => {
  return(
      <nav className="header nav-wrapper grey darken-3">
          <div className="container">
              <Link to="/" className="brand-logo">Elephant Tracker Dashboard</Link>
              <SignedInLinks/>
              <PageLinks/>
          </div>
      </nav>
  )
};

export default NavigationBar;