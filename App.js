

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
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <SignUp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
