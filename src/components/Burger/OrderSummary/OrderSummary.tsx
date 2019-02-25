import * as React from 'react';
import { Aux } from '../../../hoc/Aux';
import { Button } from '../../UI/Button';

export const OrderSummary = (props: {
  ingredients: { [x: string]: React.ReactNode; };
  price: { toFixed: (arg0: number) => React.ReactNode; };
  purchaseCancelled: () => void;
  purchaseContinued: () => void;
}) => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      );
    });

  return (
    <div>
      <Aux>
        <h3>Your Order</h3>
        <p>Delicious burger with following ingredients: </p>
        <ul>{ingredientsSummary}</ul>
        <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
        <p>Proceed to checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>PROCEED</Button>
      </Aux>
    </div>
  );
};
