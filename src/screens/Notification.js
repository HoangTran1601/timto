import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';

import NotificationItem from '../components/Notification/NotificationItem'
import Scale from '../common/Scale'
import Color from '../common/Color'

export default class Notification extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.notiItem}>
          <NotificationItem 
            header="Why Do You Need To Join An Affiliate Marketing Network"
            title="20 Jan 2016"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSctnzN-5qRjyL6L6Gxl5HITbODuP-hjhd4Eb1ynchYYFOjjSS"
          />
        </View>

        <View style={styles.notiItem}>
          <NotificationItem 
            header="Free Classifieds Using Them To Promote Your Stuff Online"
            title="05 Nov 2016"
            image="https://picture.dzogame.vn/Img/img-0312-1489747588530_pp_871.jpg"
          />
        </View>

        <View style={styles.notiItem}>
          <NotificationItem 
            header="Internet Banner Advertising Most Reliable Forms Of Web"
            title="05 Jan 2016"
            image="https://i.pinimg.com/736x/95/84/d4/9584d44c80ea0ec6f1cccca8712af574--asian-models-angels.jpg"
          />
        </View>

        <View style={styles.notiItem}>
          <NotificationItem 
            header="Using Banner Stands To Increase Trade Show Traffic"
            title="01 Jun 2016"
            image="https://i.ytimg.com/vi/wKTwoONIkAk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBQ7moafAz3Uy6iuVYcBtBd4Ja-fg"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  notiItem: {
    paddingLeft: Scale.widthScale * 16,
    paddingRight: Scale.widthScale * 56,
    paddingVertical: Scale.heightScale * 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.grayDot
  }
});