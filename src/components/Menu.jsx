import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container d-flex justify-content-center">
          <Link to="/" className="navbar-brand">Acasă</Link>
          <Link to="/tari" className="navbar-brand">Țări</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Menu;