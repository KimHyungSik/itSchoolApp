/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import Loading from './src/load/Loading';
import Login from './src/main/loginPage';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  redView: {
    flex: 1,
    width: 50,
    backgroundColor: 'red',
  },
  yellowView: {
    flex: 2,
    backgroundColor: 'yellow',
  },
});
