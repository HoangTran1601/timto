import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import Font from '../../../common/Font'
import Color from '../../../common/Color'
import Scale from '../../../common/Scale'

export default class GeneralDetail extends Component {
  render() {
    const { owner, ownerImage, header } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.header}> {header} </Text>
        <View style={styles.infoArea}>
          <View style={styles.infoItem}>
            <Image 
              source={{uri: ownerImage}}
              style={styles.ownerImage}
            />
            <View style={styles.infoContent}>
              <Text style={styles.infoHeader}>POSTED BY</Text>
              <Text style={styles.infoTitle}>{owner}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.borderArea}></View>
            <View style={styles.border}></View>
          </View>

          <View style={styles.infoItem}>
            <View style={styles.imageWrapper}>
              <Image 
                source={require('../../../assets/post-detail/IconCalendar.png')}
                style={styles.iconCalendar}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoHeader}>CREATED AT</Text>
              <View style={styles.row}>
                <Text style={styles.infoTitle}>Mon Oct 16</Text>
                <Text style={styles.infoReaction}>1 lượt xem, 4 bình luận</Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.borderArea}></View>
            <View style={styles.border}></View>
          </View>

          <View style={styles.infoItem}>
            <View style={styles.imageWrapper}>
              <Image 
                source={require('../../../assets/post-detail/IconLocation.png')}
                style={styles.iconLocation}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoHeader}>LOCATION</Text>
              <Text style={styles.infoTitle}>Penshurts NSW 2222, San Jose</Text>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  infoArea: {
    // justifyContent: 'center',
  },
  header: {
    fontSize: Font.normalize(20),
    color: Color.blue,
    marginBottom: Scale.heightScale * 12
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageWrapper: {
    width: Scale.widthScale * 40,
    height: Scale.widthScale * 40,
    alignItems: 'center',
    justifyContent: 'center' ,
    marginRight: Scale.widthScale * 20,
  },
  ownerImage: {
    width: Scale.widthScale * 40,
    height: Scale.widthScale * 40,
    marginRight: Scale.widthScale * 20,
    borderRadius: ( Scale.widthScale * 40 ) / 2,
  },
  infoHeader: {
    fontSize: Font.normalize(12),
    color: Color.darkGray
  },
  infoTitle: {
    fontSize: Font.normalize(16),
    color: Color.black
  },
  infoReaction: {
    fontSize: Font.normalize(12),
    color: Color.blue,
    marginLeft: 'auto'
  },
  iconCalendar: {
    width: Scale.widthScale * 19,
    height: Scale.widthScale * 19,
  },
  iconLocation: {
    width: Scale.widthScale * 16,
    height: Scale.heightScale * 21
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  border: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: Color.borderColor,
    marginVertical: Scale.heightScale * 9,
    marginLeft: Scale.widthScale * 20
  },
  borderArea: {
    width: Scale.widthScale * 40
  },
  infoContent: {
    flex: 1
  }
});
