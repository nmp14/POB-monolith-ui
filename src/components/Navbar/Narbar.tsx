import React from 'react';
import { NavbarLinks } from './components/NavbarLinks';
import { NavbarRight } from './components/NavbarRight';
import logo from '../../images/POB.svg';
import './navbar.scss';

export function Navbar() {
  const loggedIn = true;

  return (
    <nav className="nav-bar">
      <a href="/dashboard">
        <img className="nav-logo" src={logo} alt="Logo for Peek Omni Budgeting" />
      </a>

      <div className="verticle-bar" />

      {loggedIn && <NavbarLinks />}

      <NavbarRight />

    </nav>
  );
}

export default Navbar;
