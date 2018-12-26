import * as React from 'react';
import { Aux } from '../../hoc/Aux';
import { Toolbar } from '../Navigation/Toolbar';
import { SideDrawer } from '../Navigation/Toolbar/SideDrawer';
import * as classes from './Layout.css';

export const Layout = (props: { children: React.ReactNode; }) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);
