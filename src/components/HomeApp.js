import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, Dimensions} from 'react-native';

import Font from '../common/Font'
import Color from '../common/Color'
import DEVICE_SCALE from '../common/Scale'

export default class HomeApp extends Component {
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
    height: DEVICE_SCALE.heightScale * 320,
    width: DEVICE_SCALE.width
  },
  infoArea: {
    paddingLeft: DEVICE_SCALE.widthScale * 40,
  },
  header: {
    fontSize: Font.normalize(30),
    color: Color.black,
    fontWeight: '300',
    width: DEVICE_SCALE.widthScale * 191 + 10
  },
  content: {
    fontSize: Font.normalize(15),
    fontWeight: '300',
    marginTop: DEVICE_SCALE.heightScale * 7.5,
    color: Color.black,
    width: DEVICE_SCALE.widthScale * 191 + 10
  }
});
