import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';
import Scale from '../common/Scale'
import Color from '../common/Color'
import Font from '../common/Font'
export default class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <Image 
            source={require('../assets/IconClose.png')}
            style={styles.iconClose}
          />
        </TouchableWithoutFeedback>
        <Image 
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
      
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>Hello!</Text>
          <Text style={styles.greetingText}>Sign up to get started.</Text>
        </View>

        <View style={styles.inputArea}>
          <TextInput 
            style={[styles.input, styles.inputNumber]}
            placeholder="Your phone number"
            autoFocus={true}
            placeholderTextColor={Color.darkGray}
          />
        </View>

        <TouchableWithoutFeedback>
          <View style={styles.buttonArea}>
            <View style={[styles.buttonContent, styles.buttonSignUp]}>
              <Text style={styles.buttonText}>Log in</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    width: Scale.widthScale * 200,
    height: Scale.heightScale * 60,
    marginTop: Scale.heightScale * 76,
    alignSelf: 'center',
  },
  greeting: {
    marginTop: Scale.heightScale * 30,
    alignItems: 'center',
  },
  greetingText: {
    color: Color.greeting
  },
  inputArea: {
    paddingHorizontal: Scale.widthScale * 31,
    marginTop: Scale.heightScale * 44
  },
  input: {
    paddingVertical: Scale.heightScale * 14,
    paddingLeft: Scale.widthScale * 18,
    borderWidth: 1,
    borderColor: Color.darkGray
  },
  inputNumber: {
    borderRadius: 5
  },
  buttonArea: {
    paddingHorizontal: Scale.heightScale * 31,
  },
  buttonContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Scale.heightScale * 50,
    borderRadius: 5,
  },
  buttonSignUp: {
    marginTop: Scale.heightScale * 51,
    backgroundColor: Color.blue,
  },
  buttonText: {
    color: Color.white,
    fontSize: Font.normalize(17.5)
  },
  iconClose: {
    position: 'absolute',
    top: Scale.heightScale * 35,
    left: Scale.widthScale * 20,
    height: Scale.heightScale * 17,
    width: Scale.widthScale * 17
  }
});
