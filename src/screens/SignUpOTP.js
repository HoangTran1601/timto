
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';
import Font from '../common/Font'
import Color from '../common/Color'
import Scale from '../common/Scale'
export default class SignUpOTP extends Component {
  render() {
    return (
      <View>
        <Image 
          source={require('../assets/IconBack.png')}
          style={styles.iconBack}
        />
        <View style={styles.OtpArea}>
          <TextInput style={styles.input}/>
          <TextInput style={styles.input}/>
          <TextInput style={styles.input}/>
          <TextInput style={styles.input}/>
        </View>

        <TouchableWithoutFeedback>
          <View style={styles.buttonResendArea}>
            <View style={[styles.buttonContent, styles.buttonResend]}>
              <Text style={[styles.buttonText, styles.buttonTextResend]}>Re-send (0)</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        
        <TouchableWithoutFeedback>
          <View style={styles.buttonArea}>
            <View style={[styles.buttonContent, styles.buttonNext]}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  OtpArea: {
    marginTop: Scale.heightScale * 120,
    paddingLeft: Scale.widthScale * 58,
    paddingRight: Scale.widthScale * 57,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    borderWidth: 1,
    borderColor: Color.black,
    borderRadius: 5,
    width: Scale.widthScale * 50,
    height: Scale.widthScale * 50,
    fontSize: Font.normalize(28),
    color: Color.black,
    textAlign: 'center'
  },
  buttonArea: {
    paddingHorizontal: Scale.heightScale * 38,
    marginTop: Scale.heightScale * 93,
  },
  buttonResendArea: {
    marginTop: Scale.heightScale * 50,
    paddingHorizontal: Scale.heightScale * 50,
  },
  buttonContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Scale.heightScale * 50,
    borderRadius: 5,
  },
  buttonNext: {
    marginTop: Scale.heightScale * 51,
    backgroundColor: Color.blue,
  },
  buttonResend: {
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.blue
  },
  buttonText: {
    color: Color.white,
    fontSize: Font.normalize(17.5)
  },
  buttonTextResend: {
    color: Color.blue
  },
  iconBack: {
    position: 'absolute',
    top: Scale.heightScale * 35,
    left: Scale.widthScale * 20,
    height: Scale.heightScale * 17,
    width: Scale.widthScale * 17
  }
});
