import * as React from 'react';
import { NavigationItem } from './NavigationItem/NavigationItem';
import * as classes from './NavigationItems.module.css';

export const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
    <NavigationItem link="/" active={false}>Checkout</NavigationItem>
  </ul>
);
