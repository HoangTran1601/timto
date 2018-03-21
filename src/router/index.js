import React, {Component} from 'react';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';

import { Image, Text, TouchableOpacity} from 'react-native'

import NewsFeed from '../screens/NewsFeed'
import Notification from '../screens/Notification'
import PostDetail from '../screens/PostDetail'
import User from '../screens/User'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Home from '../screens/Home'
import PostNews from '../screens/PostNews'

import Color from '../common/Color'
import Font from '../common/Font'
import Scale from '../common/Scale'

const tabBar = TabNavigator({
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
  PostNews_Screen: {
    screen: PostNews,
    navigationOptions: ({ navigation }) => ({
      tabBarOnPress: (scene, jumpToIndex) => {
        navigation.navigate('PostNews')
      },
      tabBarLabel: ({focused}) => (
        <Text style={{color: focused ? Color.blue : Color.darkGray, fontSize: 10}}>
          Đăng tin
        </Text>
      )
    })
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
  },
  User_Screen: {
    screen: User,
    navigationOptions: {
      header: null,
      tabBarLabel: ({focused}) => (
        <Text style={{color: focused ? Color.blue : Color.darkGray, fontSize: 10}}>
          Tài khoản
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
      } else if (routeName === 'PostNews_Screen') {
        iconName = require('../assets/tabbar/Icon.png')
        width = 20
        height = 20
      } else if (routeName === 'User_Screen') {
        iconName = focused ? require('../assets/tabbar/user-fill.png') : require('../assets/tabbar/user.png')
        width = 20
        height = 20
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
  swipeEnabled: false,
  showLabel: false
});


export default App = StackNavigator({
  Credential: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: tabBar
  },
  Post_Detail: {
    screen: PostDetail,
    navigationOptions: ({ navigation }) => ({
      title: 'Rao vặt',
      headerStyle: {
        backgroundColor: '#fff',
        borderBottomWidth: 0
      },
      headerTitleStyle: {
        fontSize: Font.normalize(16),
        color: Color.black,
        fontWeight: '500',
      },
      headerLeft: (
        <TouchableOpacity onPress={ () => { navigation.goBack(null) } }  >
          <Image 
            source={require('../assets/backIcon.png')}
            style={{width: Scale.widthScale * 20, height: Scale.heightScale * 17, marginLeft: 20}}
          /> 
        </TouchableOpacity> ),
    })
  },
  PostNews: {
    screen: PostNews,
    navigationOptions: ({ navigation }) => ({
      title: 'Đăng tin',
      headerStyle: {
        backgroundColor: '#fff',
        borderBottomWidth: 0
      },
      headerTitleStyle: {
        fontSize: Font.normalize(16),
        color: Color.black,
        fontWeight: '500',
      },
      headerLeft: (
        <TouchableOpacity onPress={ () => { navigation.goBack(null) } }  >
          <Image 
            source={require('../assets/IconClose.png')}
            style={{width: Scale.widthScale * 17, height: Scale.heightScale * 17, marginLeft: Scale.widthScale * 20}}
          /> 
        </TouchableOpacity> ),
    })
  }
},
{
  navigationOptions: {
    // headerTintColor: '#000',
    // headerStyle: {
    //   backgroundColor: '#fff',
    // }
  }
});