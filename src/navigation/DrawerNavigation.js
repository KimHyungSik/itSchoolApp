import Notice from '../main/noticePage';
import Grades from '../main/gradesPage';
import Login from '../main/loginPage';
import Board from '../main/boardPage';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

export default class DrawerNavigation extends React.Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: '#e91e63',
          }}>
          <Drawer.Screen name="로그인" component={Login} />
          <Drawer.Screen name="공지사항" component={Notice} />
          <Drawer.Screen name="자유게시판" component={Board} />
          <Drawer.Screen name="성적조회" component={Grades} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
