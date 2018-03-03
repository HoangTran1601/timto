

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './src/screens/Home'
import AppIntroduce from './src/screens/AppIntroduce'
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <AppIntroduce />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
