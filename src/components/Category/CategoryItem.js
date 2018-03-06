import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import Font from '../../common/Font'
import Color from '../../common/Color'
import Scale from '../../common/Scale'

export default class CategoryItem extends Component {
  _onPress (content) {
    this.props.onPress(content)
  }
  render() {
    const {content, index, isClick} = this.props
    return (
      <TouchableWithoutFeedback onPress={this._onPress.bind(this, content)}>
        <View style={[styles.categoryItem, index !== 0 ? styles.spacing : '', isClick ? styles.changeBg : '']}>
          <Text style={[styles.categoryItemText, isClick ? styles.changeTextColor : '']}> {content} </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  categoryItem: {
    width: Scale.widthScale * 100,
    height: Scale.heightScale * 30,
    backgroundColor: Color.searchBar,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  categoryItemText: {
    fontSize: Font.normalize(14),
    color: Color.darkGray
  },
  spacing: {
    marginLeft: 10
  },
  changeBg: {
    backgroundColor: Color.blue    
  },
  changeTextColor: {
    color: Color.white
  }
});