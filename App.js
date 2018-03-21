

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import RootNavigation from './src/router'
import Home from './src/screens/Home'

export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  
    this.state = {
       list: ['Dịch vụ', 'Rao vặt', 'Việc làm', 'Cộng đồng', 'Tin tức']
    };
  };
  
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootNavigation />
        </View>
      </Provider>
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
