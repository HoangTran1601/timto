import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Button,
  TouchableWithoutFeedback
  } from 'react-native';
import Swiper from 'react-native-swiper';

import OnBoarding from '../components/OnBoarding'
import Font from '../common/Font'
import Color from '../common/Color'
import DEVICE_SCALE from '../common/Scale'

export default class componentName extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      lastPage: false
    };
  };
  
  scrollEnd (index) {
    // alert(context.state.index)
    if (index === 5) {
      this.setState({lastPage: true})
    } else if (this.state.lastPage && index === 0) {
      alert('hi')
    }
  }
  render() {
    const { lastPage } = this.state
    return (
      <View style={styles.container}>
        <Swiper
          loop={false}
          // dot={<View style={{backgroundColor:'transparent', borderWidth: 2, borderColor: '#E3E9F2',  width: 12.2, height: 12.2, borderRadius: 6.1, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          paginationStyle={styles.paginationStyle}
          showsButtons={true}
          buttonWrapperStyle={styles.buttonWrapperStyle}
          nextButton={lastPage ? <Text style={styles.btnText}>SIGN IN</Text> : <Text style={styles.btnText}>NEXT</Text>}
          prevButton={<Text style={styles.btnText}>PREV</Text>}
          loop={true}
          onIndexChanged={this.scrollEnd.bind(this)}      
        >
          <View>
            <OnBoarding 
              image="onboarding-1.png"
              header="Explore"
              content="Explore real estate in your neighboarhood or accross the world in real time."
            />
          </View>
          <View>
            <OnBoarding 
              image="onboarding-2.png"
              header="Be an Agent"
              content="At every moment you can tell if the vibration that you are sending is either a positive one or a negative."
            />
          </View>
          <View>
            <OnBoarding 
              image="onboarding-3.png"
              header="Be a Buyer"
              content="When you type the website name on your address bar, a simple yet classy homepage of the website."
            />
          </View>
          <View>
            <OnBoarding 
              image="onboarding-4.png"
              header="Be a Seller"
              content="Did you read the DaVinci Code or maybe see the movie? Did it get you interested in history and secret codes?"
            />
          </View>
          <View>
            <OnBoarding 
              image="onboarding-5.png"
              header="Neighboarhood Influancer"
              content="Gain followers, likes and rise a neighboarhood influancer."
            />
          </View>
          <View>
            <OnBoarding 
              image="onboarding-6.png"
              header="Message"
              content="Follow, like or direct message post that spark your interest."
            />
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  disableStyle: {
    display: 'none',
  },
  container: {
    flex: 1
  },
  dotStyle: {
    width: DEVICE_SCALE.widthScale * 12.2,
    height: DEVICE_SCALE.heightScale * 12.2,
    borderRadius: 6.1,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Color.grayDot 
  },
  activeDotStyle: {
    width: DEVICE_SCALE.widthScale * 12.2,
    height: DEVICE_SCALE.heightScale * 12.2,
    borderRadius: 6.1,
    backgroundColor: Color.blue
  },
  buttonWrapperStyle: {
    alignItems: 'flex-end',
    paddingHorizontal: DEVICE_SCALE.widthScale * 16,
  },
  btnText: {
    fontSize: Font.normalize(14),
    color: Color.gray,
    fontWeight: '300',
    marginBottom: 17
  },
  paginationStyle: {
    backgroundColor: Color.white,
    paddingVertical: DEVICE_SCALE.heightScale * 28,
    position: 'absolute',
    bottom: 0,
    shadowColor: 'rgba(0,0,0,15)',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15
  }
});