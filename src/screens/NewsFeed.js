import React, { Component, PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { fetchPostByCategory, postLoadMore } from '../actions/PostListAction'

import SearchBar from '../common/SearchBar'
import PostItem from '../components/Post/PostItem'
import Category from '../components/Category/Category'

import Color from '../common/Color'
import Scale from '../common/Scale'
import Font from '../common/Font'

class NewsFeed extends PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id.toString()
  constructor(props) {
    super(props)
  
    this.state = {
       list: ['Dịch vụ', 'Rao vặt', 'Việc làm', 'Cộng đồng', 'Tin tức'],
       isLoading: false,
    };
  };

  componentWillMount () {
    this.props.fetchPostByCategory(this.props.token, this.props.categoryIndex, this.props.page)
  }

  renderFooter = () => {
    if (!this.props.isFooterLoading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large"/>
      </View>
    );
  };

  scroll () {
    this.setState({isLoading: true})
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 4000)
  }

  _onPress (post) {
    this.props.navigation.navigate('Post_Detail', {
      header: post.title,
      owner: post.author.username,
      ownerImage: 'https://i.ytimg.com/vi/2KpsrQGOMmI/maxresdefault.jpg',
      description: post.content,
      locationName: post.location ? post.location.address : '',
      seenAmount: post.views,
      commentAmount: post.comment_count,
      createdAt: post.created_at.split('T')[0]
    })
  }

  end () {
    console.log('end')
    let page = this.props.page
    page += 1
    alert(page)
    this.props.postLoadMore(this.props.token, this.props.categoryIndex, page)
  }

  _renderItem = (post) => (
    <View style={styles.postItem}>
      <PostItem 
        headerTitle={post.item.title}
        locationName={post.item.location ? post.item.location.address : ''}
        seenAmount={post.item.views}
        commentAmount={post.item.comment_count}
        content={post.item.content}
        onPress={this._onPress.bind(this, post.item)}  
      />
    </View>
  )

  render() {
    let pageContent
    if (this.props.postListLoading) {
      pageContent = (
        <View style={styles.loadingArea}>
          <ActivityIndicator size="large" color={Color.blue} style={styles.loading}/>
        </View>
      )
    } else {
      pageContent = (
        <FlatList
            extraData={this.state}
            onRefresh={this.scroll.bind(this)}
            refreshing={this.state.isLoading}
            onEndReachedThreshold={0}
            onEndReached={this.end.bind(this)}
            data={this.props.posts || []}
            keyExtractor={this._keyExtractor}
            ListFooterComponent={this.renderFooter}
            renderItem={this._renderItem}
          />   
      )
    }
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
        <View style={styles.mainContent}>
          {pageContent}
        </View>
        <View style={styles.tabbar}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.searchBar,
    flex: 1
  },
  mainContent: {
    flex: 1
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
  },
  loadingArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white
  }
  // tabbar: {
  //   height: 50,
  //   alignContent: 'flex-end',
  //   backgroundColor: 'red'
  // }
});

const mapStateToProps = state => ({
  posts: state.posts.posts,
  newPost: state.posts.post,
  page: state.posts.page,
  categoryIndex: state.posts.categoryIndex,
  isFooterLoading: state.posts.isFooterLoading,
  postListLoading: state.posts.postListLoading,
  token : state.user.userInfo.token,
});

export default connect(mapStateToProps, { fetchPostByCategory, postLoadMore })(NewsFeed);