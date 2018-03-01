import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

export default class OnBoarding extends Component {
  render() {
    const {header, content, image} = this.props
    let imageRequired

    switch (image) {
      case 'onboarding-1.png': 
        imageRequired = require('../assets/onboarding/onboarding-1.png')
        break
      case 'onboarding-2.png': 
        imageRequired = require('../assets/onboarding/onboarding-2.png')
        break 
      case 'onboarding-3.png': 
        imageRequired = require('../assets/onboarding/onboarding-3.png')
        break 
      case 'onboarding-4.png': 
        imageRequired = require('../assets/onboarding/onboarding-4.png')
        break 
      case 'onboarding-5.png': 
        imageRequired = require('../assets/onboarding/onboarding-5.png')
        break 
      default: 
        imageRequired = require('../assets/onboarding/onboarding-6.png')
        break  
    }
    return (
      <View style={styles.container}>
        <Image 
          source={imageRequired}
          style={styles.image}
        />
        <View style={styles.infoArea}>
          <Text style={styles.header}>{header}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100
  },
  infoArea: {
    marginTop: 86,
    paddingHorizontal: 30,
  },
  header: {
    color: '#3B7CEC',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  content: {
    color: '#5F5F5F',
    fontSize: 18,
    fontFamily: 'Avenir',
    fontWeight: 'normal',
    textAlign: 'center'
  },
  image: {
    width: 198,
    height: 202
  }
});


