import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import Color from '../common/Color'
import Scale from '../common/Scale'
import Font from '../common/Font'

import SectionHeader from '../components/Section/SectionHeader'
import GeneralDetail from '../components/Post/PostDetail/GeneralDetail'
import PostDescription from '../components/Post/PostDetail/PostDescription'
import Comment from '../components/Comment/Comment'
export default class PostDetail extends Component {
  render() {
    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {/* <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>Tin đăng</Text>
          </View> */}
          <SectionHeader title="Tin đăng"/>
          <View style={styles.generalDetailArea}>
            <GeneralDetail
              header="Vong deo tay cho quy chi e."
              owner="hoangnguyenvu"
              ownerImage="https://i.ytimg.com/vi/2KpsrQGOMmI/maxresdefault.jpg"
            />
          </View>

          {/* <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>Miêu tả</Text>
          </View> */}
          <SectionHeader title="Miêu tả"/>

          <View style={styles.postDescriptionArea}>
            <PostDescription 
              description="Vong deo tay cho quy chi e. Nhieu mau ma, dep, bat mat.
              Dac biet, mot so kieu duoc design theo tinh chat phong thuy, rat phu hop cho nhung ban co tin nguong. Gia 10 usd/cai (Van chuyen: 10 usd/cai trong khu vuc San Jose.
              Ky 4087504815.Vui long nhan tin, neu ban muon coi mau vi web co the ko coi duoc hinh"
            />
          </View>

          {/* <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleText}>Bình luận</Text>
          </View> */}

          <SectionHeader title="Bình luận"/>
          <View style={styles.commentArea}>
            <Comment/>
            <Comment/>
          </View>

          <View style={styles.inputArea}>
            <TextInput 
              placeholder="Bình luận hoặc để lại câu hỏi"
              style={styles.input}
            />
          </View>

          <TouchableOpacity>
            <View style={styles.callArea}>
                <Image 
                  source={require('../assets/post-detail/callIcon.png')}
                  style={styles.callIcon}
                />
                <Text style={styles.callText}>GỌI ĐIỆN</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
  generalDetailArea: {
    paddingHorizontal: Scale.widthScale * 20,
    paddingTop: Scale.heightScale * 20,
    paddingBottom: Scale.heightScale * 15,
  },
  postDescriptionArea: {
    paddingHorizontal: Scale.widthScale * 15,
    paddingVertical: Scale.heightScale * 15,
  },
  commentArea: {
    paddingTop: Scale.heightScale * 15,
    paddingLeft: Scale.widthScale * 30,
    paddingRight: Scale.widthScale * 20
  },
  inputArea: {
    marginBottom: Scale.heightScale * 15,
    marginLeft: Scale.widthScale * 30,
    marginRight: Scale.widthScale * 20,
  },
  input: {
    backgroundColor: Color.searchBar,
    borderRadius: 100,
    paddingVertical: Scale.heightScale * 8.5,
    paddingLeft: Scale.widthScale * 15
  },
  callArea: {
    height: Scale.heightScale * 50,
    backgroundColor: Color.call,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  callIcon: {
    width: Scale.widthScale * 19,
    height: Scale.widthScale * 19,
    marginRight: Scale.widthScale * 10
  },
  callText: {
    color: Color.white,
    fontSize: Font.normalize(16),
  }
});
