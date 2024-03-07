import React, { Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const authenticatedOptions = (
  <>
    <Nav.Item className='m-2'>
      <Link to='change-password' style={linkStyle}>
        Change Password
      </Link>
    </Nav.Item>
    <Nav.Item className='m-2'>
      <Link to='sign-out' style={linkStyle}>
        Sign Out
      </Link>
    </Nav.Item>
    {/* New "My Plants" link */}
    <Nav.Item className='m-2'>
      <Link to='/my-plants' style={linkStyle}>
        My Plants
      </Link>
    </Nav.Item>
  </>
);

const unauthenticatedOptions = (
  <>
    <Nav.Item className='m-2'>
      <Link to='sign-up' style={linkStyle}>
        Sign Up
      </Link>
    </Nav.Item>
    <Nav.Item className='m-2'>
      <Link to='sign-in' style={linkStyle}>
        Sign In
      </Link>
    </Nav.Item>
  </>
);

const alwaysOptions = (
  <>
    <Nav.Item className='m-2'>
      <Link to='/' style={linkStyle}>
        Home
      </Link>
    </Nav.Item>
    <Nav.Item className='m-2'>
      <Link to='/plant-quiz' style={linkStyle}>
        Plant Quiz
      </Link>
    </Nav.Item>
  </>
);

function handleSearch(evt) {
  evt.preventDefault();
}

function handleZip(evt) {
  evt.preventDefault();
}

const Header = ({ user }) => (
  <Navbar expand='md' className='navbar'>
    <div className='navbar-contents'>
      <Navbar.Brand className='m-2'>
        <div className='top'>
          <div>
            <Link to='/' style={linkStyle} id='sitename'>
              My Little Garden
            </Link>
            <img src='https://i.imgur.com/GzFQWN6.png' alt='' className='icon' />
          </div>
          <form onSubmit={handleSearch}>
            <input type="text" name="search" placeholder='Search' />
          </form>
          <form onSubmit={handleZip}>
            <input type="text" name="zip" placeholder='ZIP Code' />
          </form>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {user && (
            <span className='navbar-text mr-2' id='username'>Welcome, {user.email}</span>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default Header;
