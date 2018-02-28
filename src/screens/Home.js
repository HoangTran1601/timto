import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import Swiper from 'react-native-swiper';

import HomeApp from '../components/HomeApp'

export default class componentName extends Component {
  render() {
    return (
      <View>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}
