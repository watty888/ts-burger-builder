import * as React from 'react';
import { IngredientTypes } from '../../containers/BurgerBuilder';
import * as classes from './Burger.css';
import { BurgerIngredient } from './BurgerIngredient';

export interface IBurgerProps {
  ingredients: IngredientTypes;
}

export class Burger extends React.Component<IBurgerProps>{
  private transformedIngredients: JSX.Element | JSX.Element[] | null = null;

  private _setTransformedIngredoents = (): void => {
    this.transformedIngredients = Object.keys(this.props.ingredients)
    .map(igKey => {
      return [...Array(this.props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => arr.concat(el), []);

    if (this.transformedIngredients.length === 0) {
      this.transformedIngredients = <p>Please start adding ingredients!</p>;
    }
  }

  public render(): JSX.Element {
    return (
      <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {this._setTransformedIngredoents()}
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
  }
}
