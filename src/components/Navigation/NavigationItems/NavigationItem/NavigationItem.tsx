import * as React from 'react';
import * as classes from './NavigationItem.css';

export const NavigationItem = (props: {
  link: string | undefined;
  active: boolean;
  children: React.ReactNode; }) => (
  <li className={classes.NavigationItem}>
    <a
      href={props.link}
      className={props.active ? classes.active : ''}
    >{props.children}</a>
  </li>
);
