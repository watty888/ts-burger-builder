
import { AxiosResponse } from 'axios';
import * as React from 'react';
import { mainAxios } from '../../axios-orders';
import { Burger } from '../../components/Burger';
import { BuildControls } from '../../components/Burger/BuildControls/BuildControls';
import { OrderSummary } from '../../components/Burger/OrderSummary';
import { Modal } from '../../components/UI/Modal/Modal';
import { Spinner } from '../../components/UI/Spinner/Spinner';
import { Aux } from '../../hoc';

export interface IngredientTypes {
  bacon: number | null;
  cheese: number | null;
  meat: number | null;
  salad: number | null;
  [index: string]: any;
}

export interface IBurgerBuilderProps { }

export interface IBurgerBuilderState {
  ingredients: IngredientTypes;
  purchasable: boolean;
  purchasing: boolean;
  totalPrice: number;
  [index: string]: any;
  loading: boolean;
  error: boolean;
}

const INGREDIENT_PRICES: IngredientTypes = {
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
  salad: 0.5,
};


export interface OrderType {
  ingredients: IngredientTypes;
  price: number;
  customer: {
    name: string,
    address: {
      street: string,
      zipCode: string,
      country: string,
    },
    email: string,
  };
  deliveryMethod: string;
}

export class BurgerBuilder extends React.Component<IBurgerBuilderProps, IBurgerBuilderState> {
  public state = {
    ingredients: {
      bacon: null,
      cheese: null,
      meat: null,
      salad: null,
    } as IngredientTypes,
    purchasable: false,
    purchasing: false,
    totalPrice: 4,
    loading: false,
    error: false,
  };

  componentDidMount() {
    mainAxios.get('https://react-my-burger-js.firebaseio.com/ingredients.json')
      .then((response: AxiosResponse) => {
        this.setState({ ingedients: response.data });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  private purchaseContinueHandler = () => {
    this.setState({ loading: true });

    const order: OrderType = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Elcin Bunyatov',
        address: {
          street: 'Teststreet 1',
          zipCode: '1050',
          country: 'Austria',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
    };

    mainAxios.post('/orders', order)
      .then((response: any) => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch((error: any) => {
        this.setState({ loading: false, purchasing: false });
      });
  }

  private purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  private purchaseHandler = (): void => {
    this.setState({ purchasing: true });
  }

  private updatePurchaseState = (ingredients: IngredientTypes) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum: number, el: number) => {
        return sum + el;
      },      0);
    this.setState({ purchasable: sum as number > 0 });
  }

  private addIngredientHandler = (type: string) => {
    const oldCount: number = this.state.ingredients[type] as number;
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };

    updatedIngredients[type] = updatedCount;

    const priceAddition: number = INGREDIENT_PRICES[type] as number;
    const oldPrice: number = this.state.totalPrice;
    const newPrice: number = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  }

  private removeIngredientHandler = (type: string) => {
    if (this.state.ingredients[type] === 0) {
      return;
    } else {
      const oldCount: number = this.state.ingredients[type] as number;
      const updatedCount: number = oldCount - 1;
      const updatedIngredients = { ...this.state.ingredients };

      updatedIngredients[type] = updatedCount;

      const priceAddition: number = INGREDIENT_PRICES[type] as number;
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceAddition;

      this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
      this.updatePurchaseState(updatedIngredients);
    }
  }

  public render(): JSX.Element {
    const disabledInfo: IngredientTypes = { ...this.state.ingredients };

    for (const key in disabledInfo) {
      disabledInfo[key] = (disabledInfo[key] as number) <= 0;
    }

    let orderSummary: JSX.Element | null = null;
    let burger: JSX.Element | null = this.state.error ?
      <p>Ingredients can't be loaded</p> : <Spinner />;

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice} />
        </Aux>
      );

      orderSummary = <OrderSummary
        ingredients={this.state.ingredients}
        price={this.state.totalPrice}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler} />;
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}
