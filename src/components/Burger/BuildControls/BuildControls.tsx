import * as React from 'react';

import { IngredientTypes } from '../../../containers/BurgerBuilder/BurgerBuilder';
import { BuildControl } from './BuildControl/BuildControl';
import * as classes from './BuildControls.module.css';

type ControlsType = {
  label: string;
  type: string
};

interface BuildControlsProps {
  price: number;
  ingredientAdded: (type: string) => void;
  ingredientRemoved: (type: string) => void;
  disabled: IngredientTypes;
  purchasable: boolean;
  ordered: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const controls: ControlsType[] = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

export const BuildControls = (props: BuildControlsProps): JSX.Element => {
  return (
    <div className={classes.BuildControls}>
    <p>Current price: <strong>${props.price.toFixed(2)}</strong></p>
    {controls.map((ctrl: ControlsType) => {
      return <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={(): void => props.ingredientAdded(ctrl.type)}
        removed={(): void => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />;
    })}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >ORDER NOW</button>
    </div>
  );
};
