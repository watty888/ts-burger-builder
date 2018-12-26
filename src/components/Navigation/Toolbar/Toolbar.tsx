import * as React from 'react';
import { Logo } from '../../Logo';
import { NavigationItems } from '../NavigationItems';
import * as classes from './Toolbar.css';


export const Toolbar = () => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo/>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);
