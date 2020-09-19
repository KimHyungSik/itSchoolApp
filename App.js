import React from 'react';
import Login from './src/main/loginPage';
import Loading from './src/loading/loading';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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
    const Stack = createStackNavigator();
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="로그인" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}
