import * as React from 'react';
import { IngredientTypes } from '../../containers/BurgerBuilder';
import * as classes from './Burger.module.css';
import { BurgerIngredient } from './BurgerIngredient';

export interface IBurgerProps {
  ingredients: IngredientTypes;
}

export const Burger = (props: IBurgerProps) => {
  let transformedIngredients: JSX.Element[] | JSX.Element = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={ igKey + i } type={ igKey } />;
      });
    })
    .reduce((arr, el) => { return arr.concat(el); }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={ classes.Burger }>
      <BurgerIngredient type="bread-top" />
      { transformedIngredients }
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
