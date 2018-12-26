import * as React from 'react';
import * as classes from './Backdrop.css';

export const Backdrop = (props: {
  show: boolean;
  clicked: ((event: React.MouseEvent<HTMLDivElement>) => void) | undefined;
}) => (
  props.show ? <div className={classes.Backdrop} onClick={props.clicked} /> : null
);
