

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
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <SignUpOTP />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
