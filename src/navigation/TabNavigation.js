import NoticeList from '../main/noticePage';
import Grades from '../main/gradesPage';
import Login from '../main/loginPage';
import Board from '../main/boardPage';
import Schedule from '../main/schedulePage';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTab from './customTab';

export default class TabNavigation extends React.Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <CustomTab {...props} />}>
          <Tab.Screen name="로그인" component={Login} />
          <Tab.Screen name="공지사항" component={NoticeList} />
          <Tab.Screen name="시간표" component={Schedule} />
          <Tab.Screen name="더보기" component={Grades} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
