import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';

import SearchBar from '../common/SearchBar'
import PostItem from '../components/Post/PostItem'
import Category from '../components/Category/Category'

import Color from '../common/Color'
import Scale from '../common/Scale'
import Font from '../common/Font'

export default class NewsFeed extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       list: ['Dịch vụ', 'Rao vặt', 'Việc làm', 'Cộng đồng', 'Tin tức']
    };
  };

  render() {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.searchBar}>
            <SearchBar 
              image="searchIcon"
            /> 
          </View>
          <View style={styles.category}>
            <Category category={this.state.list}/>
          </View>
        </View>
        <ScrollView
          style={styles.postList}
          showsVerticalScrollIndicator={false}
        >
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.white,
    marginTop: 24,
  },
  searchBar: {
    paddingHorizontal: 15,
  },
  category: {
    paddingLeft: 15,
    marginVertical: 12
  },
  postList: {
    backgroundColor: Color.searchBar,
  }
});