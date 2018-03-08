import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Font from '../../common/Font'
import Color from '../../common/Color'
import Scale from '../../common/Scale';

export default class CommentContent extends Component {
  render() {
    const { content } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.contentText}>{content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: Scale.widthScale * 30
  },
  contentText: {
    fontSize: Font.normalize(14),
    color: Color.black
  }
});
