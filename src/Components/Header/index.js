import React from 'react';
import { NavLink } from 'react-router-dom';

// Stylesheet
import { HeaderNav, Nav } from './style.js';

//import API from './../../API';

const Header = () => {
  return (
    <HeaderNav>
      <Nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderNav>
  );
};

export default Header;
