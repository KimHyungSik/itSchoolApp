import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';

export default class loginPage extends React.Component {
  state = {
    value: '',
    LoginopAnimation: new Animated.Value(0),
  };

  handleValue = (text) => {
    this.setState({value: text});
  };

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.LoginopAnimation, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: 'true',
      }),
    ]).start();
  }

  render() {
    const LoginAin = {
      opacity: this.state.LoginopAnimation,
    };
    return (
      <View style={styels.container}>
        <View style={styels.titleView}>
          <Image
            source={require('../../resource/images/schoolLogo.png')}
            style={styels.imageLogo}></Image>
        </View>
        <Animated.View style={[styels.loginView, LoginAin]}>
          <TextInput
            style={styels.inputBox}
            value={this.state.value}
            onChangeText={this.handleValue}
          />
          <TextInput
            style={styels.inputBox}
            value={this.state.value}
            onChangeText={this.handleValue}
          />
          <TouchableOpacity style={styels.loginButtin}></TouchableOpacity>
        </Animated.View>
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
    flex: 2,
    opacity: 0,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  imageLogo: {
    resizeMode: 'contain',
    width: 180,
  },
  inputBox: {
    height: 40,
    marginTop: '10%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  loginButtin: {
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    marginTop: '18%',
    borderRadius: 14,
  },
});
