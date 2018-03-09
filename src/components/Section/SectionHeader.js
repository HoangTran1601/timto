import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Color from '../../common/Color'
import Scale from '../../common/Scale'
import Font from '../../common/Font'

export default class SectionHeader extends Component {
  render() {
    const { title } = this.props
    return (
      <View style={styles.sectionTitle}>
        <Text style={styles.sectionTitleText}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionTitle: {
    backgroundColor: Color.searchBar,
    justifyContent: 'center',
    paddingLeft: Scale.widthScale * 20,
    paddingVertical: Scale.heightScale * 12
  },
  sectionTitleText: {
    fontSize: Font.normalize(14),
    color: Color.darkGray
  },
});