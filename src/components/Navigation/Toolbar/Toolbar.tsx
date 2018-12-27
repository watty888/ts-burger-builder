import * as React from 'react';
import { Logo } from '../../Logo';
import { NavigationItems } from '../NavigationItems';
import { DrawerToggler } from './SideDrawer/DrawerToggler';
import * as classes from './Toolbar.module.css';

export const Toolbar = (props: any) => (
  <header className={classes.Toolbar}>
    <DrawerToggler clicked={props.drawerTogglerClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);
