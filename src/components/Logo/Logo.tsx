import * as React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import * as classes from './Logo.css';

export const Logo = () => (
  <div  className={classes.Logo}>
    <img src={burgerLogo} alt="My Burger" />
  </div>
);
