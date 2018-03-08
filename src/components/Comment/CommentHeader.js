import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import Scale from '../../common/Scale'
import Font from '../../common/Font'
import Color from '../../common/Color'

export default class CommentHeader extends Component {
  render() {
    const { userImage, username, timePost } = this.props
    return (
      <View>
        <View style={styles.header}>
          <Image 
            source={{ uri: userImage }}
            style={styles.userImage}
          />
          <View style={styles.commentInfoArea}>
            <Text style={styles.usernameText}> { username } </Text>
            <Text style={styles.timeText}> { timePost }</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  userImage: {
    width: Scale.widthScale * 30,
    height: Scale.widthScale * 30,
    marginRight: Scale.widthScale * 8,
    borderRadius: (Scale.widthScale * 30) / 2,
  },
  usernameText: {
    fontSize: Font.normalize(14),
    color: Color.black
  },
  timeText: {
    fontSize: Font.normalize(12),
    color: Color.darkGray
  }
});