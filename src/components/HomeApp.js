import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window')
export default class componentName extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../../assets/homeSlider/home-slider-1.png')}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.infoArea}>
          <Text style={styles.header}>Ready to explore?</Text>
          <Text style={styles.content}>Let us  help you to find exciting things you will love, no matter where you go.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    opacity: 0.5,
    height: 470,
    width: width
  },
  infoArea: {
    paddingLeft: 40,
    
    backgroundColor: '#fff',
    transform: [{translateY: -130}],
    flex: 1
  },
  header: {
    fontSize: 30,
    color: '#404244',
    fontWeight: '300',
    width: 191
  },
  content: {
    fontSize: 15,
    fontWeight: '300',
    marginTop: 7.5,
    color: '#404244',
    width: 191
  }
});
