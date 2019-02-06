import * as React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import * as classes from './Logo.module.css';

type LogoProps = {
  height?: number;
};

export const Logo = (props: LogoProps) => (
  <div  className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="My Burger" />
  </div>
);
