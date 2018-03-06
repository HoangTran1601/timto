import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import Color from './Color'
import Scale from './Scale'
import Font from './Font'

export default class Enable extends Component {
  render() {
    const {background, image, icon, iconWidth, iconHeight, header, content, btnText} = this.props
    let bgRequire, iconRequire, imageRequire
    switch (background) {
      case 'OverlayBg': 
        bgRequire = require('../assets/enable/OverlayBg.png')
        break
    }
    switch (icon) {
      case 'iconPinMap': 
        iconRequire = require('../assets/enable/iconPinMap.png')
        break
      case 'iconPush': 
        iconRequire = require('../assets/enable/iconPush.png')
        break
    }
    return (      
      <View style={styles.container}>
        <Image
          source={bgRequire}
          style={styles.background}
          resizeMode="cover"
        />
        <Text style={styles.header}>{header}</Text>
        <Image 
          source={iconRequire}
          style={styles.icon}
        />
        <Image 
          source={require('../assets/enable/iconCity.png')}
          style={styles.image}
        />
        <Text style={styles.content}>{content}</Text>

        <TouchableWithoutFeedback>
          <View style={styles.buttonArea}>
            <View style={[styles.buttonContent, styles.buttonEnable]}>
              <Text style={styles.buttonText}>{btnText}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.notAllow}>Do not allow</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    position: 'absolute',
  },
  header: {
    fontSize: Font.normalize(28),
    color: Color.blackContent,
    marginTop: Scale.heightScale * 66,
    alignSelf: 'center',
    textAlign: 'center',
    width: Scale.widthScale * 275
  },
  icon: {
    marginTop: Scale.heightScale * 30,
    width: 69,
    height: 69,
    alignSelf: 'center'
  },
  image: {
    width: Scale.widthScale * 255,
    height: Scale.heightScale * 85,
    alignSelf: 'center',
    marginTop: Scale.heightScale * 58
  },
  content: {
    marginTop: Scale.heightScale * 55,
    color: Color.blackContent,
    fontSize: Font.normalize(18),
    width: Scale.widthScale * 275,
    alignSelf: 'center',
    textAlign: 'center'
  },
  buttonArea: {
    paddingHorizontal: Scale.heightScale * 16,
    position: 'absolute',
    bottom: Scale.heightScale * 64,
    left: 0,
    right: 0
  },
  buttonContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Scale.heightScale * 46,
    borderRadius: 3,
  },
  buttonEnable: {
    // marginTop: Scale.heightScale * 51,
    backgroundColor: Color.blue,
  },
  buttonText: {
    color: Color.white,
    fontSize: Font.normalize(16)
  },
  notAllow: {
    fontSize: Font.normalize(14),
    color: Color.darkGray,
    position: 'absolute',
    bottom: Scale.heightScale * 31,
    alignSelf: 'center',
  }
});
