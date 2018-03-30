import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux'
import { fetchPostByCategory } from '../../actions/PostListAction'

import CategoryItem from './CategoryItem'
import Scale from '../../common/Scale'
class Category extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       categoryItem: {
         'Dịch vụ': true,
         'Rao vặt': false,
         'Việc làm': false,
         'Cộnng đồng': false,
         'Tin tức': false,
       }
    };
  };

  onPress (index) {
    this.setState({categoryItem: {
      'Dịch vụ': index === 0 ? true : false,
      'Rao vặt': index === 1 ? true : false,
      'Việc làm': index === 2 ? true : false,
      'Cộng đồng': index === 3 ? true : false,
      'Tin tức': index === 4 ? true : false,
    }})
    this.props.fetchPostByCategory(this.props.token, index, 1)
  }
  render() {
    const {categoryItem} = this.state
    const {category} = this.props
    const listItems = category.map((item, index) =>
      <CategoryItem
        index={index}
        content={item}
        key={index}
        isClick={categoryItem[item]}
        onPress={this.onPress.bind(this)}
      />
    );
    return (
      <ScrollView 
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        {listItems}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  categoryItem: {
    marginHorizontal: 10,
  }
});

const mapStateToProps = state => ({
  posts: state.posts.posts,
  newPost: state.posts.post,
  token : state.user.userInfo.token
});

export default connect(mapStateToProps, { fetchPostByCategory })(Category);