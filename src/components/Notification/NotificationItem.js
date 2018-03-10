import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image
} from 'react-native';

import Color from '../../common/Color'
import Scale from '../../common/Scale'
import Font from '../../common/Font'

export default class NotificationItem extends Component {
  render() {
    const { header, title, image } = this.props
    return (
      <View style={styles.container}>
        <Image 
          source={{uri: image}}
          style={styles.image}
        />
        <View style={styles.infoArea}>
          <Text style={styles.headerText}>{header}</Text>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: Scale.widthScale * 59,
    height: Scale.widthScale * 59,
    borderRadius: 3,
    marginRight: Scale.widthScale * 16,
  },
  infoArea: {
    flex: 1
  },
  headerText: {
    // width: Scale.widthScale * 228,
    fontSize: Font.normalize(14),
    color: Color.blackContent,
    marginBottom: Scale.heightScale * 5
  },
  titleText: {
    fontSize: Font.normalize(12),
    color: Color.darkGray
  }
});