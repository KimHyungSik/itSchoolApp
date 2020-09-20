import Notice from '../main/noticePage';
import Grades from '../main/gradesPage';
import Login from '../main/loginPage';
import Board from '../main/boardPage';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default class DrawerNavigation extends React.Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Notice" component={Notice} />
          <Tab.Screen name="Board" component={Board} />
          <Tab.Screen name="Grades" component={Grades} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
