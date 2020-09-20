import React from 'react';
import Loading from './src/loading/loading';
import TabNavigation from './src/navigation/DrawerNavigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

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
      return <TabNavigation />;
    }
  }
}
