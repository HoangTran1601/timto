import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Font from '../../common/Font'
import Color from '../../common/Color'

export default class PostContent extends Component {
  render() {
    const { content } = this.props
    return (
      <View>
        <Text
          style={styles.content}
          numberOfLines={2}
        > 
          {content}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    fontSize: Font.normalize(14),
    color: Color.black
  }
});
