import * as React from 'react';
import { Aux } from '../../../hoc/Aux';
import { Backdrop } from '../Backdrop';
import * as classes from './Modal.css';

export const Modal = (props: {
  show: boolean;
  modalClosed: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
  children: React.ReactNode; }) => {
  const divStyle: {} = {
    opacity: props.show ? '1' : '0',
    transform: props.show ? 'TranslateY(0)' : 'TranslateY(-100vh)',
  };

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed}/>
      <div
        className={classes.Modal}
        style={divStyle}
      >{props.children}</div>
    </Aux>
  );
};
