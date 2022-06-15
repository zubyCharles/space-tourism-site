import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../sass/_navbar.scss';
import Logo from '../icons/logo.svg';
import Hamburger from '../icons/icon-hamburger.svg';
import Close from '../icons/icon-close.svg';

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);

  const hideSideBar = () => {
    setSideBar(false);
  };
  return (
    <>
      <div className={sideBar ? 'overlay' : null} onClick={hideSideBar}></div>
      <div className="nav-header">
        <div className="site-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="hamburger">
          <img onClick={() => setSideBar(true)} src={Hamburger} alt="" />
        </div>
      </div>
      <nav className={`nav ${sideBar ? 'active' : null}`}>
        <div className="close">
          <img onClick={hideSideBar} src={Close} alt="" />
        </div>
        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: 'inherit',
                      color: 'inherit',
                      paddingBottom: '15px',
                      borderBottom: '2px solid #fff',
                    }
                  : { textDecoration: 'inherit', color: 'inherit' }
              }
              onClick={hideSideBar}
            >
              00 &nbsp; Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destinations"
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: 'inherit',
                      color: 'inherit',
                      paddingBottom: '15px',
                      borderBottom: '2px solid #fff',
                    }
                  : { textDecoration: 'inherit', color: 'inherit' }
              }
              onClick={hideSideBar}
            >
              01 &nbsp; Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: 'inherit',
                      color: 'inherit',
                      paddingBottom: '15px',
                      borderBottom: '2px solid #fff',
                    }
                  : { textDecoration: 'inherit', color: 'inherit' }
              }
              onClick={hideSideBar}
            >
              02 &nbsp; Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tech"
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: 'inherit',
                      color: 'inherit',
                      paddingBottom: '15px',
                      borderBottom: '2px solid #fff',
                    }
                  : { textDecoration: 'inherit', color: 'inherit' }
              }
              onClick={hideSideBar}
            >
              03 &nbsp; Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
