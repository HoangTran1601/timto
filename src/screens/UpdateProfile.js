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
export default class UpdateProfile extends Component {
  render() {
    return (
      <View>
        <Image 
          source={require('../assets/IconBack.png')}
          style={styles.iconBack}
        />
        <TouchableWithoutFeedback style={styles.imageUploadArea}>
          <Image 
            source={require('../assets/ImageUpload.png')}
            style={styles.imageUpload}
          />
        </TouchableWithoutFeedback>
        <View style={styles.inputArea}>
          <TextInput 
            placeholder="Username"
            style={styles.input}
          />
        </View>

        <TouchableWithoutFeedback>
          <View style={styles.buttonArea}>
            <View style={[styles.buttonContent, styles.buttonUpdate]}>
              <Text style={styles.buttonText}>Update Profile</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconBack: {
    position: 'absolute',
    top: Scale.heightScale * 35,
    left: Scale.widthScale * 20,
    height: Scale.heightScale * 17,
    width: Scale.widthScale * 17
  },
  imageUpload: {
    width: Scale.widthScale * 101,
    height: Scale.widthScale * 101,
    marginTop: Scale.heightScale * 117,
    alignSelf: 'center',
  },
  inputArea: {
    marginTop: Scale.heightScale * 40,
    paddingHorizontal: Scale.widthScale * 31,
  },
  input: {
    height: Scale.heightScale * 50,
    borderWidth: 1,
    borderColor: Color.borderInput,
    borderRadius: 5,
    paddingLeft: Scale.widthScale * 17.5
  },
  buttonArea: {
    paddingHorizontal: Scale.heightScale * 38,
    marginTop: Scale.heightScale * 64,
  },
  buttonContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Scale.heightScale * 50,
    borderRadius: 5,
  },
  buttonUpdate: {
    backgroundColor: Color.borderInput,
  },
  buttonText: {
    color: Color.white,
    fontSize: Font.normalize(18)
  }
});
