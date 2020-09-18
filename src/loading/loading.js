import React from 'react';
import {View, StyleSheet, Image, Animated} from 'react-native';

export default class loading extends React.Component {
  state = {
    LoginAnimation: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.sequence([
      Animated.delay(1800),
      Animated.timing(this.state.LoginAnimation, {
        toValue: 2,
        duration: 1000,
      }),
    ]).start();
  }

  render() {
    const LoginAin = {
      flex: this.state.LoginAnimation,
    };

    return (
      <View style={styels.container}>
        <View style={styels.titleView}>
          <Image
            source={require('../../resource/images/schoolLogo.png')}
            style={styels.imageLogo}></Image>
        </View>
        <Animated.View style={[styels.loginView, LoginAin]}></Animated.View>
      </View>
    );
  }
}

const styels = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  titleView: {
    flex: 1,
    backgroundColor: '#02365D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginView: {
    flex: 0,
    opacity: 1,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  imageLogo: {
    resizeMode: 'contain',
    width: 180,
  },
});
