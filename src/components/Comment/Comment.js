import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Scale from '../../common/Scale'
import Color from '../../common/Color'

import CommentHeader from './CommentHeader'
import CommentContent from './CommentContent'

export default class Comment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CommentHeader 
          userImage="https://i.ytimg.com/vi/2KpsrQGOMmI/maxresdefault.jpg"
          username="thienmuoimuoi"
          timePost="5h ago"
        />
        <View style={styles.contentArea}>
          <CommentContent 
            content="Mình muốn đổi với cuốn Elon Musk được không vậy Hoàng ?."
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Scale.heightScale * 15,
    paddingBottom: Scale.heightScale * 17,
    borderBottomWidth: 1,
    borderBottomColor: Color.borderColor,
  },
  contentArea: {
    marginTop: Scale.heightScale * 16
  }
});