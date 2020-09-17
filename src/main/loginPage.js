import React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';

export default class loginPage extends React.Component {
  state = {
    value: '',
  };

  handleValue = (text) => {
    this.setState({value: text});
  };

  render() {
    return (
      <View style={styels.container}>
        <View style={styels.titleView}>
          <Image
            source={require('../../resource/images/schoolLogo.png')}
            style={styels.imageLogo}></Image>
        </View>
        <View style={styels.loginView}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            value={this.state.value}
            onChangeText={this.handleValue}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            value={this.state.value}
            onChangeText={this.handleValue}
          />
        </View>
      </View>
    );
  }
}

const styels = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    flex: 1,
    backgroundColor: '#02365D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginView: {
    flex: 3,
    backgroundColor: '#ffffff',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  imageLogo: {
    resizeMode: 'contain',
    width: 180,
  },
});
