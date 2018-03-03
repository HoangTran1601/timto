import React from 'react';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get("window")

export default {
  width: width,
  height: height,
  heightScale: height / 667,
  widthScale: width / 375
}