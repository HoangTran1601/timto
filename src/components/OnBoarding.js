import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

export default class OnBoarding extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../../assets/onboarding/onboarding-3.png')}
          style={styles.image}
        />
        <View style={styles.infoArea}>
          <Text style={styles.header}>Explore</Text>
          <Text style={styles.content}>Explore real estate in your neighboarhood or accross the world in real time</Text>
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


