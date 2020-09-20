import React from 'react';
import {View, Text, StyleSheet} from '@react-navigation/native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';

export default class DrawerCustom extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView>
          <View>
            <Text>Hello</Text>
          </View>
        </DrawerContentScrollView>
      </View>
    );
  }
}
