import * as React from 'react';
import * as classes from './Backdrop.module.css';

type IBackDropProps = {
  show: boolean;
  clicked: any;
};

export const Backdrop = (props: IBackDropProps) => (
  props.show ? <div className={classes.Backdrop} onClick={props.clicked} /> : null
);
