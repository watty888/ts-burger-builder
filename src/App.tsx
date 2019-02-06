import * as React from 'react';
import { BurgerBuilder } from './containers/BurgerBuilder';
import { Layout } from './hoc/Layout/Layout';


export class App extends React.Component {
  public render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
