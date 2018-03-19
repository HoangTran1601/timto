import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import Font from '../../common/Font'
import Scale from '../../common/Scale'
import Color from '../../common/Color'

import PostContent from './PostContent'
import PostImage from './PostImage'
import PostHeader from './PostHeader'

export default class PostItem extends Component {
  _onPress () {
    this.props.onPress
    // alert("hi")
  }

  render() {
    const { headerTitle, content, locationName, seenAmount, commentAmount } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={styles.postItemHeader}>
            <View style={styles.postImage}>
              <PostImage 
                imageUrl="https://i.ytimg.com/vi/2KpsrQGOMmI/maxresdefault.jpg"
              />
            </View>
            <PostHeader
              headerTitle={headerTitle}
              locationName={locationName}
              seenAmount={seenAmount}
              commentAmount={commentAmount}
              date="17/10/17"
            />
          </View>
          <View style={styles.postContent}>
            <PostContent
              content={content}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    // marginTop: 15,
    marginHorizontal: 15,
    backgroundColor: Color.white
  },
  postItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postImage: {
    marginRight: 10
  },
  postContent: {
    marginTop: 10
  }
});