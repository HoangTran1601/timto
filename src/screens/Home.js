import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import Swiper from 'react-native-swiper';

import HomeApp from '../components/HomeApp'

export default class componentName extends Component {
  render() {
    return (
        <View style={styles.wrapper}>
          <Swiper 
            autoplay={true}
            loop={true}
          >
            <View style={styles.slide1}>
              <HomeApp 
                image="home-slider-1.png"
                header="Discover interesting things"
                content="Let us  help you to find exciting things you will love, no matter where you go."
              />
            </View>
            <View style={styles.slide2}>
              <HomeApp 
                image="home-slider-2.png"
                header="Connect People"
                content="Our mission is to connect people with the places in which they spend their time."
              />
            </View>
            <View style={styles.slide3}>
              <HomeApp 
                image="home-slider-3.png"
                header="Ready to explore?"
                content="Our app offers comprehensive guides to events and places."
              />
            </View>
          </Swiper>
          <View style={styles.credential}>
            <TouchableWithoutFeedback>
              <View style={[styles.btn, styles.btnSignUp]}>
                <Text style={[styles.text, styles.txtSignUp]}>Sign up</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={[styles.btn, styles.btnLogIn]}>
                <Text style={[styles.text, styles.txtLogin]}>Log in</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.explore}>
          <TouchableWithoutFeedback >
            <View>
              <Text style={styles.txtExplore}>Not ready to Sign Up? Explore the app.</Text>
            </View>
          </TouchableWithoutFeedback>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  credential: {
    paddingHorizontal: 18.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  btn: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 160
  },
  btnSignUp: {
    backgroundColor: '#3B7CEC'
  },
  btnLogIn: {
    backgroundColor: 'transparent',
    borderColor: '#3B7CEC',
    borderWidth: 1,
  },
  text: {
    fontSize: 17.5,
    fontWeight: '300'
  },
  txtSignUp: {
    color: '#fff'
  },
  txtLogin: {
    color: '#3B7CEC'
  },
  explore: {
    paddingVertical: 18.5,
  },
  txtExplore: {
    fontSize: 12.5,
    fontWeight: '300',
    color: '#3B7CEC',
    textAlign: 'center'
  }
});