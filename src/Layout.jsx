import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './LOGOSCHEDINONERESIZE.png';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Link to="/">
        <div className="App">
          <header>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Link>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Layout;
