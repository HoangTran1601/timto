import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Font from '../common/Font'
import Color from '../common/Color'
import Scale from '../common/Scale'
import PostItem from '../components/Post/PostItem'

export default class User extends Component {
  _onPress () {
    this.props.navigation.navigate('Post_Detail', {
      header: 'Vong deo tay cho quy chi e.',
      owner: 'hoangnguyenvu',
      description: `Vong deo tay cho quy chi e. Nhieu mau ma, dep, bat mat. Dac biet, mot so kieu duoc design theo tinh chat phong thuy, rat phu hop cho nhung ban co tin nguong. Gia 10 usd/cai (Van chuyen: 10 usd/cai trong khu vuc San Jose. Ky 4087504815.Vui long nhan tin, neu ban muon coi mau vi web co the ko coi duoc hinh`
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image 
            source={require('../assets/user/settings.png')}
            style={styles.setting}
          />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <View style={styles.userAvatarArea}>
            <Image 
              source={require('../assets/user/img_placeholder.png')}
              style={styles.avatar}
            />
            <Image 
              source={require('../assets/user/img_camera.png')}
              style={styles.camera}
            />
          </View>

          <View style={styles.userInfoArea}>
            <Text style={styles.username}>Seth Massey</Text>
            <Text style={styles.userPhone}>01662000725</Text>
          </View>
          <Image 
            source={require('../assets/user/edit.png')}
            style={styles.edit}
          />
        </View>
        <ScrollView 
          style={styles.postList}
          showsVerticalScrollIndicator={false}  
        >
          <View>
            <PostItem onPress={this._onPress.bind(this)}/>
          </View>
          <View style={styles.postItem}>
            <PostItem onPress={this._onPress.bind(this)}/>
          </View>
          <View style={styles.postItem}>
            <PostItem onPress={this._onPress.bind(this)}/>
          </View>
          <View style={styles.postItem}>
            <PostItem onPress={this._onPress.bind(this)}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.searchBar,
    flex: 1
  },
  infoContainer: {
    flexDirection: 'row'
  },
  userAvatarArea: {
    width: Scale.widthScale * 101,
    height: Scale.widthScale * 101,
    marginTop: Scale.heightScale * 64.5,
    marginLeft: 15
  },
  avatar: {
    width: Scale.widthScale * 101,
    height: Scale.widthScale * 101,
    flexDirection: 'row',
  },
  camera: {
    width: Scale.widthScale * 25,
    height: Scale.widthScale * 25,
    position: 'absolute',
    top: Scale.widthScale * 5,
    left: Scale.widthScale * 75
  },  
  userInfoArea: {
    marginLeft: Scale.widthScale * 20,
    marginTop: Scale.heightScale * 85,
  },
  username: {
    fontSize: Font.normalize(18),
    color: Color.black,
    marginBottom: 3,
  },
  userPhone: {
    fontSize: Font.normalize(14),
    color: Color.darkGray
  },
  edit: {
    width: Scale.widthScale * 20,
    height: Scale.widthScale * 19,
    marginLeft: Scale.widthScale * 13,
    marginTop: Scale.heightScale * 85,
  },
  postList: {
    marginTop: Scale.heightScale * 30
  },
  setting: {
    position: 'absolute',
    top: Scale.heightScale * 49,
    right: Scale.widthScale * 25,
    width: Scale.widthScale * 25,
    height: Scale.widthScale * 25
  },
  postItem: {
    marginTop: 15
  }
});
