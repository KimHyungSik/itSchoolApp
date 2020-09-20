import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class grades extends React.Component {
  render() {
    return (
      <View>
        <Text>grades</Text>
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
