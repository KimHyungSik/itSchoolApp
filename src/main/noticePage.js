import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class notice extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styels.menuIcon}
          onPress={() => this.props.navigation.toggleDrawer()}>
          <Image
            source={require('../../resource/images/menu_icon.png')}></Image>
        </TouchableOpacity>
        <Text>notice</Text>
      </View>
    );
  }
}

const styels = StyleSheet.create({
  menuIcon: {
    height: 40,
    position: 'absolute',
    top: 0,
    left: 6,
    alignSelf: 'flex-start',
  },
});
