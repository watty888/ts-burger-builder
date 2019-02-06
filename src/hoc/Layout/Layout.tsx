import * as React from 'react';
import { Toolbar } from '../../components/Navigation/Toolbar';
import { SideDrawer } from '../../components/Navigation/Toolbar/SideDrawer';
import { Aux } from '../../hoc/Aux';
import * as classes from './Layout.module.css';

export interface ILayoutProps {
  open?: boolean;
  closed?: any;
}

export interface ILayoutState {
  showSideDrawer: boolean;
}
export class Layout extends React.Component<ILayoutProps> {
  state = {
    showSideDrawer: false,
  };

  private _sideDrawerToggleHandler = () => {
    const prevState = { ...this.state };
    this.setState(() => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  }

  public render(): JSX.Element {
    return (
      <Aux>
        <Toolbar drawerTogglerClicked={this._sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this._sideDrawerToggleHandler}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
