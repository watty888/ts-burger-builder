import * as React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import * as classes from './Logo.module.css';

export const Logo = (props: any) => (
  <div  className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="My Burger" />
  </div>
);
