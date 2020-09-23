import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TopTitle = ({title}) => {
  const styels = StyleSheet.create({
    title: {
      backgroundColor: '#2358A6',
      height: 42,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <View style={styels.title}>
      <Text style={{color: '#ffffff', fontSize: 18}}>{title}</Text>
    </View>
  );
};

export default TopTitle;
