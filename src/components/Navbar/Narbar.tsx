import React from 'react';
import { NavbarLinks } from '../NavbarLinks';
import logo from '../../images/POB.svg';
import './navbar.scss';

export function Navbar() {
  const loggedIn = true;
//   const loggedIn = false;

  return (
    <nav className="nav-bar">
      <a href="/home">
        <img className="nav-logo" src={logo} alt="Logo for Peek Omni Budgeting" />
      </a>

      <div className="verticle-bar" />

      {loggedIn && <NavbarLinks />}

      <div className="nav-login">
        {loggedIn
          ? (
            <>
              <span>User</span>
              <span>Logout</span>
            </>
          )
          : (
            <div>Login</div>
          )}
      </div>
    </nav>
  );
}

export default Navbar;
