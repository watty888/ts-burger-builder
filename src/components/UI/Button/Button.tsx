import * as React from 'react';
import * as classes from './Button.module.css';

// export interface IButtonProps {
//   btnType: string;
//   clicked: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
// }

export const Button = (props: any) => (
  <button
    className={[classes.Button, classes[props.btnType]].join(' ')} // fix cast to any
    onClick={props.clicked}
  >{props.children}
  </button>
);
