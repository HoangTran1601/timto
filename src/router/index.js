import React, {Component} from 'react';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';

import { Image, Text } from 'react-native'

import NewsFeed from '../screens/NewsFeed'
import Notification from '../screens/Notification'
import Color from '../common/Color'
import Font from '../common/Font'

export default tabBar = TabNavigator({
  NewsFeed_Screen: {
    screen: NewsFeed,
    navigationOptions: {
      header: null,
      tabBarLabel: ({focused}) => (
        <Text style={{color: focused ? Color.blue : Color.darkGray, fontSize: 10}}>
          Tin tức
        </Text>
      )
    }
  },
  Notification_Screen: {
    screen: Notification,
    navigationOptions: {
      header: null,
      tabBarLabel: ({focused}) => (
        <Text style={{color: focused ? Color.blue : Color.darkGray, fontSize: 10}}>
          Thông báo
        </Text>
      )
    }
  }
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let width, height
      let iconName;
      if (routeName === 'NewsFeed_Screen') {
        iconName = focused ?  require('../assets/tabbar/home-fill.png') : require('../assets/tabbar/home.png');
        width = 19
        height = 21
      } else if (routeName === 'Notification_Screen') {
        iconName = focused ? require('../assets/tabbar/notification.png') : require('../assets/tabbar/notification.png')
        width = 20
        height = 24
      }
      return <Image style={{width: width, height: height, tintColor: tintColor}}source={iconName} />
    },
  }),
  tabBarOptions: {
    // activeTintColor: 'black',
    // inactiveTintColor: 'gray',
    showLabel: true,
    style: {
      backgroundColor: '#fff',
      borderTopWidth: 0,
      paddingTop: 8,
      paddingBottom: 4
    }
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: true,
  showLabel: false
});