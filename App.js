

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
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
        <Category category={this.state.list}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
