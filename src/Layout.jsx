import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './LOGOSCHEDINONERESIZE.png';
import background from './SFONDO.png';

const Layout = () => {
  return (
    <>
      <Link to="/">
        <div
          className="App"
          style={{
            backgroundImage: `url(${background}) no-repeat center center fixed;`,
          }}
        >
          <header>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Link>
      <Outlet />
    </>
  );
};

export default Layout;
