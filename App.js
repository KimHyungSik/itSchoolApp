import React from 'react';
import Login from './src/main/loginPage';
import Loading from './src/loading/loading';

export default class App extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount = async () => {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 3000);
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      return <Login />;
    }
  }
}
