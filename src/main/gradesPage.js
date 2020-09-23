import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import TopTitle from '../part/topTitle';

export default class grades extends React.Component {
  render() {
    return (
      <View>
        <TopTitle title="한국it직업전문학교"></TopTitle>
      </View>
    );
  }
}

const styels = StyleSheet.create({
  title: {
    backgroundColor: '#2358A6',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
