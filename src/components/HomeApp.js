import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window')
export default class componentName extends Component {
  render() {
    const { header, content, image } = this.props
    let imageRequire
    switch(image) {
      case 'home-slider-1.png':
        imageRequire = require('../assets/homeSlider/home-slider-1.png')
        break;
      case 'home-slider-2.png':
        imageRequire = require('../assets/homeSlider/home-slider-2.png')
        break;
      default:
        imageRequire = require('../assets/homeSlider/home-slider-3.png')
  }
    return (
      <View style={styles.container}>
        <Image 
          source={imageRequire}
          style={styles.image}
          resizeMode="stretch"
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

  },
  image: {
    opacity: 0.5,
    height: 350,
    width: width
  },
  infoArea: {
    paddingLeft: 40,
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
