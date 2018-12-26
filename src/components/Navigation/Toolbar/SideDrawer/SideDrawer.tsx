import * as React from 'react';
import { Logo } from '../../../Logo';
import { NavigationItems } from '../../NavigationItems';
import * as classes from './SideDrawer.css';

export const SideDrawer = () => {
  // ...
  return (
    <div className={classes.SideDrawer}>
      <Logo/>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  );
};
