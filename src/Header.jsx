import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export const Header = props => {
  const { navItems, navigateTo } = props;
  return <>
    <header>
      <div className="logo-wrapper">
        <img src="" alt=""/>
      </div>
      <nav className="navigation">
        <ul className="navigation__list">
          {navItems.map((item, index) => (
            <li className="navigation__item" key={index}>
              <Button 
                onClick={() => navigateTo(item)}
                variant="contained" 
                color="primary"
              >
                {item}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  </>
}

Header.propTypes = {
  navItems: PropTypes.array,
  navigateTo: PropTypes.func,
}