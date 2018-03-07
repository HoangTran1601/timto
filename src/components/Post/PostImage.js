import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Scale from '../../common/Scale'

export default class PostImage extends Component {
  render() {
    const { imageUrl } = this.props
    return (
      <View>
        <Image 
          source={{uri: imageUrl}}
          style={styles.image}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: Scale.widthScale * 60,
    height: Scale.widthScale * 60,
    borderRadius: (Scale.widthScale * 60) / 2,
  }
});