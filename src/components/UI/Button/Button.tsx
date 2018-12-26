import * as React from 'react';
import * as classes from './Button.css';


export interface IButtonProps {
  btnType: string;
  clicked: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  children: React.ReactNode;
}

export const Button = (props: IButtonProps) => (
  <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}
  >{props.children}
  </button>
);
