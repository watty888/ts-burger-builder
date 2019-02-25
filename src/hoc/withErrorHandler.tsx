import { observable } from 'mobx';
import * as React from 'react';
import { Modal } from '../components/UI/Modal';
import { Aux } from './Aux';

interface Props {
  error: boolean;
}

export const withErrorHandler = (WrappedComponent: any, axios: any) => {
  return class extends React.Component<Props> {
    state = {
      error: null,
    };

    componentWillMount() {
      axios.interceptors.request.use((req: any) => {
        this.setState({ error: null });
        return req;
      });

      axios.interceptors.response.use((res: any) => res, (err: any) => {
        this.setState({ error: err });
      });
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      let errorMessage: any = null;

      if (this.state.error) {
        // @ts-ignore: --strictNullChecks
        errorMessage = this.state.error.message;
      }

      return (
        <Aux>
          <Modal
            show={ this.state.error }
            modalClosed={ this.errorConfirmedHandler }>
            { errorMessage }
          </Modal>
          <WrappedComponent { ...this.props } />
        </Aux>
      );
    }
  };
};
