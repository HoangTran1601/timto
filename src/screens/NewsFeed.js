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

  _onPress () {
    this.props.navigation.navigate('Post_Detail', {
      header: 'Vong deo tay cho quy chi e.',
      owner: 'hoangnguyenvu',
      ownerImage: 'https://i.ytimg.com/vi/2KpsrQGOMmI/maxresdefault.jpg',
      description: `Vong deo tay cho quy chi e. Nhieu mau ma, dep, bat mat. Dac biet, mot so kieu duoc design theo tinh chat phong thuy, rat phu hop cho nhung ban co tin nguong. Gia 10 usd/cai (Van chuyen: 10 usd/cai trong khu vuc San Jose. Ky 4087504815.Vui long nhan tin, neu ban muon coi mau vi web co the ko coi duoc hinh`
    })
  }

  render() {
    return (
      <View style={styles.container}>
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
          <View>
            <PostItem onPress={this._onPress.bind(this)}/>
          </View>
          <View style={styles.postItem}>
            <PostItem onPress={this._onPress.bind(this)}/>
          </View>
          <View style={styles.postItem}>
            <PostItem onPress={this._onPress.bind(this)}/>
          </View>
          <View style={styles.postItem}>
            <PostItem onPress={this._onPress.bind(this)}/>
          </View>
          <View style={styles.postItem}>
            <PostItem onPress={this._onPress.bind(this)}/>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.searchBar
  },
  header: {
    backgroundColor: Color.white,
    marginTop: 24,
  },
  searchBar: {
    paddingHorizontal: 15,
    marginTop: 4
  },
  category: {
    paddingLeft: 15,
    marginVertical: 12
  },
  postList: {
    backgroundColor: Color.searchBar,
    paddingTop: 15
  },
  postItem: {
    marginTop: 15
  }
});