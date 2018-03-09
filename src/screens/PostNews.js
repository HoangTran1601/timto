import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import Color from '../common/Color'
import Font from '../common/Font'
import Scale from '../common/Scale'

import HeaderSection from '../components/Section/SectionHeader'
import Category from '../components/Category/Category'
export default class PostNews extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      list: ['Dịch vụ', 'Rao vặt', 'Việc làm', 'Cộng đồng', 'Tin tức']
    };
  };
  
  render() {
    return (
      <View style={styles.container}>
        <HeaderSection title="Chuyên mục"/>

        <View style={styles.category}>
          <Category 
            category={this.state.list}
          />
        </View>

        <HeaderSection title="Tiêu đề"/>

        <TextInput 
          placeholder="Nhập tên bài đăng"
          placeholderTextColor={Color.darkGray}
          style={styles.input}
        />

        <HeaderSection title="Miêu tả"/>

        <TextInput 
          placeholder="Viết miêu tả chi tiết tin đăng của bạn…"
          placeholderTextColor={Color.darkGray}
          multiline={true}
          numberOfLines={10}
          style={[styles.input, styles.inputPostContent]}
        />

        <HeaderSection title="Chọn vị trí"/>

        <TextInput 
          placeholder="Nhập tên bài đăng"
          placeholderTextColor={Color.darkGray}
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.searchBar,
    flex: 1
  },
  category: {
    paddingVertical: Scale.heightScale * 20,
    paddingLeft: Scale.widthScale * 28,
    paddingRight: Scale.widthScale * 24,
    backgroundColor: Color.white
  },
  input : {
    fontSize: Font.normalize(14),
    paddingVertical: Scale.heightScale * 20.5,
    paddingLeft: Scale.widthScale * 20,
    backgroundColor: Color.white
  },
  inputPostContent: {
    height: Scale.heightScale * 182
  }
});