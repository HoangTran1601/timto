import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, Dimensions} from 'react-native';

import Font from '../common/Font'

const {height, width} = Dimensions.get('window')
const DEVICE_SCALE = {
  width: width / 375,
  height: height / 667
}

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
    height: DEVICE_SCALE.height * 320,
    width: width
  },
  infoArea: {
    paddingLeft: DEVICE_SCALE.width * 40,
  },
  header: {
    fontSize: Font.normalize(30),
    color: '#404244',
    fontWeight: '300',
    width: DEVICE_SCALE.width * 191 + 10
  },
  content: {
    fontSize: Font.normalize(15),
    fontWeight: '300',
    marginTop: DEVICE_SCALE.height * 7.5,
    color: '#404244',
    width: DEVICE_SCALE.width * 191 + 10
  }
});
