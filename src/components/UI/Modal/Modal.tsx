import * as React from 'react';
import { Aux } from '../../../hoc/Aux';
import { Backdrop } from '../Backdrop';
import * as classes from './Modal.module.css';

export interface IModalProps {
  show: boolean | any;
  modalClosed: () => void;
}

export class Modal extends React.Component<IModalProps> {
  shouldComponentUpdate = (nextProps: any, nextState: any) => {
    return nextProps.show !== this.props.show;
  }

  public render () {
    const divStyle: {} = {
      opacity: this.props.show ? '1' : '0',
      transform: this.props.show ? 'TranslateY(0)' : 'TranslateY(-100vh)',
    };
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div
          className={classes.Modal}
          style={divStyle}
        >{this.props.children}</div>
      </Aux>
    );
  }
}
