import React from 'react';
import logo from './logo.svg'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export const Header = props => {
  return <>
    <header>
      <div className="logo-wrapper">
        <img src={logo} className="App" alt=""/>
      </div>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/">
              <Button 
                  variant="contained" 
                  color="primary"
                >
                  Login
              </Button>
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/map">
              <Button 
                  variant="contained" 
                  color="primary"
                >
                  Map
              </Button>
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/profile">
              <Button 
                  variant="contained" 
                  color="primary"
                >
                  Profile
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
}