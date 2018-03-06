import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import CategoryItem from './CategoryItem'
import Scale from '../../common/Scale'
export default class Category extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       categoryItem: {
         'Dịch vụ': false,
         'Rao vặt': false,
         'Việc làm': true,
         'Cộnng đồng': false,
         'Tin tức': false,
       }
    };
  };

  onPress (content) {
    this.setState({categoryItem: {
      'Dịch vụ': content === 'Dịch vụ' ? true : false,
      'Rao vặt': content === 'Rao vặt' ? true : false,
      'Việc làm': content === 'Việc làm' ? true : false,
      'Cộng đồng': content === 'Cộng đồng' ? true : false,
      'Tin tức': content === 'Tin tức' ? true : false,
    }})
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
        horizontal={true}
      >
        {listItems}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  categoryItem: {
    marginHorizontal: 10,
  }
});