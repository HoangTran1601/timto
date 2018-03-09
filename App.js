

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  
} from 'react-native';

import Home from './src/screens/Home'
import AppIntroduce from './src/screens/AppIntroduce'
import SignIn from './src/screens/SignIn'
import SignUp from './src/screens/SignUp'
import SignUpOTP from './src/screens/SignUpOTP'
import UpdateProfile from './src/screens/UpdateProfile'
import Search from './src/common/SearchBar'
import Enable from './src/common/Enable'
import Category from './src/components/Category/Category'
import PostItem from './src/components/Post/PostItem'
import NewsFeed from './src/screens/NewsFeed'
import Test from './src/components/Post/PostDetail/GeneralDetail'
import PostDes from './src/components/Post/PostDetail/PostDescription'
import PostDetail from './src/screens/PostDetail'
import PostNews from './src/screens/PostNews'
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  
    this.state = {
       list: ['Dịch vụ', 'Rao vặt', 'Việc làm', 'Cộng đồng', 'Tin tức']
    };
  };
  
  render() {
    return (
      <View style={styles.container}>
        <PostNews/>
      </View>
      //https://i.ytimg.com/vi/2KpsrQGOMmI/maxresdefault.jpg
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  test: {
    backgroundColor: '#F4F7F9'
  }
});
