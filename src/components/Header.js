import React from 'react';
import logo from '../images/RMlogo.png';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="logo-container">
            <img className="logo" src={logo} alt="Rick and Morty" />
          </div>
        </header>
      </>
    );
  }
}

export default Header;
