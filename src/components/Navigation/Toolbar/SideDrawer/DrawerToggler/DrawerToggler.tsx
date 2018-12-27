import * as React from 'react';
import * as classes from './DrawerToggler.module.css';

export const DrawerToggler = (props: any) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
