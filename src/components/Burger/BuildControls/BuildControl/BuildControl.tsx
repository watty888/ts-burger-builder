import * as React from 'react';
import * as classes from './BuildControl.module.css';

interface BuildControlProps {
  label: string;
  removed: (event: React.MouseEvent<HTMLButtonElement>) => void;
  added: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
}

export const BuildControl = (props: BuildControlProps) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >Less</button>
      <button className={classes.More} onClick={props.added}>More</button>
    </div>
  );
};
