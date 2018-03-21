import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/PostListAction'

import SearchBar from '../common/SearchBar'
import PostItem from '../components/Post/PostItem'
import Category from '../components/Category/Category'

import Color from '../common/Color'
import Scale from '../common/Scale'
import Font from '../common/Font'

class NewsFeed extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       list: ['Dịch vụ', 'Rao vặt', 'Việc làm', 'Cộng đồng', 'Tin tức']
    };
  };

  componentWillMount () {
    this.props.fetchPost(this.props.token)
  }

  _onPress (post) {
    this.props.navigation.navigate('Post_Detail', {
      header: post.title,
      owner: post.author.username,
      ownerImage: 'https://i.ytimg.com/vi/2KpsrQGOMmI/maxresdefault.jpg',
      description: `Vong deo tay cho quy chi e. Nhieu mau ma, dep, bat mat. Dac biet, mot so kieu duoc design theo tinh chat phong thuy, rat phu hop cho nhung ban co tin nguong. Gia 10 usd/cai (Van chuyen: 10 usd/cai trong khu vuc San Jose. Ky 4087504815.Vui long nhan tin, neu ban muon coi mau vi web co the ko coi duoc hinh`,
      locationName: post.location.address,
      seenAmount: post.views,
      commentAmount: post.comment_count,
      createdAt: post.created_at.split('T')[0]
    })
  }

  render() {
    const posts = this.props.posts.map(post => {
      console.log('hi')
      return (
        <View key={post.id} style={styles.postItem}>
          <PostItem 
            headerTitle={post.title}
            locationName={post.location.address}
            seenAmount={post.views}
            commentAmount={post.comment_count}
            content={post.content}
            onPress={this._onPress.bind(this, post)}  
          />
        </View>
    )}
  )
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
          {posts}
          

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
  },
  postItem: {
    marginTop: 15
  }
});

const mapStateToProps = state => ({
  posts: state.posts.posts,
  newPost: state.posts.post,
  token : state.user.userInfo.token
});

export default connect(mapStateToProps, { fetchPost })(NewsFeed);