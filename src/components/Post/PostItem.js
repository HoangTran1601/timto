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
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.postItemHeader}>
            <View style={styles.postImage}>
              <PostImage 
                imageUrl="https://i.ytimg.com/vi/2KpsrQGOMmI/maxresdefault.jpg"
              />
            </View>
            <PostHeader
              headerTitle="SUA CHUA MAY TINH"
              locationName="San jose"
              seenAmount={1}
              commentAmount={4}
              date="17/10/17"
            />
          </View>
          <View style={styles.postContent}>
            <PostContent
              content="Nhan sua chua va lap rap tat ca cac loai may tinh. Cai dat tat ca cac loai phan mem, phan…"
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
    marginTop: 15,
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