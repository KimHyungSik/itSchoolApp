import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';

export default class Loading extends React.Component {
  render() {
    return (
      <View style={styels.mainView}>
        <ImageBackground
          source={require('../../resource/images/schoolLogo.png')}
          style={styels.imageLogo}></ImageBackground>
      </View>
    );
  }
}

const styels = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {
    width: 200,
    height: 100,
  },
});
