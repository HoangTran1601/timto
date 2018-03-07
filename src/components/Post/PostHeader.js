import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Font from '../../common/Font'
import Color from '../../common/Color'
import Scale from '../../common/Scale'

export default class PostHeader extends Component {
  render() {
    const { headerTitle, locationName, seenAmount, commentAmount, date } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.headerTitleArea}>
          <Text style={styles.headerTitle}>{headerTitle.toUpperCase()}</Text>
        </View>
        <View style={styles.locationArea}>
          <Image 
            source={require('../../assets/post/IconLocation.png')}
            style={styles.iconLocation}
          />
          <Text style={styles.locationText}> {locationName} </Text>
        </View>
        <View style={styles.reactionArea}>
          <Text style={styles.reactionText}>{seenAmount} lượt xem, </Text>
          <Text style={styles.reactionText}>{commentAmount} bình luận</Text>
          <Text style={[styles.reactionText, styles.date]}>{date}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  headerTitleArea: {
    flex: 1
  },
  headerTitle: {
    fontSize: Font.normalize(14),
    color: Color.blue
  },
  locationArea: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iconLocation: {
    width: Scale.widthScale * 8,
    height: Scale.heightScale * 11.64,
    marginRight: Scale.widthScale * 4
  },
  locationText: {
    fontSize: Font.normalize(12),
    color: Color.darkGray
  },
  reactionArea: {
    flex: 1,
    flexDirection: 'row',
  },
  reactionText: {
    fontSize: Font.normalize(12),
    color: Color.darkGray
  },
  date: {
    justifyContent: 'flex-end',
  }
});