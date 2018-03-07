import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image
} from 'react-native';
import Color from './Color'
import Scale from './Scale'
import Font from './Font'

export default class SearchBar extends Component {
  render() {
    const {image} = this.props
    let imageRequired
    switch (image) {
      case 'searchIcon': 
      imageRequired = require('../assets/SearchIcon.png')
    }
    return (
      <View style={styles.container}>
        <Image 
          source={imageRequired}
          style={styles.icon}
        />
        <TextInput 
          placeholder="Nhập từ khoá cần tìm - Ví dụ: laptop,…"
          style={styles.input}
          placeholderTextColor={Color.darkGray}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.searchBar,
    borderRadius: 100,
    flexDirection: 'row',
    paddingVertical: Scale.heightScale * 9,
    paddingLeft: Scale.widthScale * 15
  },
  icon: {
    width: Scale.widthScale * 17,
    height: Scale.widthScale * 17,
    marginRight: Scale.widthScale * 11,
  },
  input: {
    fontSize: Font.normalize(14)
  }
});