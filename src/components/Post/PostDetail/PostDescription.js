import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Color from '../../../common/Color'
import Font from '../../../common/Font'

export default class PostDescription extends Component {
  render() {
    const { description } = this.props
    return (
      <View>
        <Text style={styles.descriptionText}>{description} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  descriptionText: {
    fontSize: Font.normalize(14),
    color: Color.black
  }
});
