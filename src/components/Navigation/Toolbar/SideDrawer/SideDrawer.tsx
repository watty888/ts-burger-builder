import * as React from 'react';
import { Aux } from '../../../../hoc';
import { Logo } from '../../../Logo';
import { Backdrop } from '../../../UI/Backdrop';
import { NavigationItems } from '../../NavigationItems';
import * as classes from './SideDrawer.module.css';

type ISideDrawerProps = {
  open: any;
  closed: any;
};
export const SideDrawer = (props: ISideDrawerProps) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </Aux>
  );
};
