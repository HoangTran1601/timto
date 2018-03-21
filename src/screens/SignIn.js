import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import { login } from '../actions/userLogin'

import Scale from '../common/Scale'
import Color from '../common/Color'
import Font from '../common/Font'

class SignIn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      phone: '',
      password: ''
    }
  }

  componentWillMount () {
    console.log(this.props.navigation.state)
  }

  _onPress () {
    this.props.navigation.navigate('SignUp')
  }

  _onGoBack () {
    this.props.navigation.goBack()
  }

  signIn () {
    const userInfo = this.state
    this.props.login(userInfo)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.loginSuccess) this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    }))
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this._onGoBack.bind(this)}>
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
          <Text style={styles.greetingText}>Hello again.</Text>
          <Text style={styles.greetingText}>Welcome back.</Text>
        </View>

        <View style={styles.inputArea}>
          <TextInput 
            style={[styles.input, styles.inputNumber]}
            placeholder="Your phone number"
            autoFocus={true}
            placeholderTextColor={Color.darkGray}
            onChangeText={(phone) => this.setState({phone})}
          />
          <TextInput
            style={[styles.input, styles.inputPassword]}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={Color.darkGray}
            onChangeText={(password) => this.setState({password})}
          />
        </View>

        <TouchableWithoutFeedback onPress={this.signIn.bind(this)}>
          <View style={styles.buttonArea}>
            <View style={[styles.buttonContent, styles.buttonLogin]}>
              <Text style={styles.buttonText}>Log in</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <Text style={styles.forgotPassword}>Forgot your password?</Text>

        <TouchableWithoutFeedback onPress={this._onPress.bind(this)}>
          <View style={[styles.buttonArea, styles.buttonSignUpArea]}>
            <View style={[styles.buttonContent, styles.buttonSignUp]}>
              <Text style={styles.buttonTextSignUp}>Sign up</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white
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
    marginTop: Scale.heightScale * 24.5
  },
  input: {
    paddingVertical: Scale.heightScale * 14,
    paddingLeft: Scale.widthScale * 18,
    borderWidth: 1,
    borderColor: Color.darkGray
  },
  inputNumber: {
    borderBottomWidth: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  inputPassword: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonArea: {
    paddingHorizontal: Scale.heightScale * 31,
  },
  buttonSignUpArea: {
    position: 'absolute',
    bottom: Scale.heightScale * 30,
    left: 0,
    right: 0
  },
  buttonContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Scale.heightScale * 50,
    borderRadius: 5,
  },
  buttonLogin: {
    marginTop: Scale.heightScale * 30.5,
    backgroundColor: Color.blue,
  },
  buttonSignUp: {
    borderWidth: 1,
    borderColor: Color.blue
  },
  buttonText: {
    color: Color.white,
    fontSize: Font.normalize(17.5)
  },
  buttonTextSignUp: {
    color: Color.blue
  },
  forgotPassword: {
    marginTop: Scale.heightScale * 102,
    color: Color.blue,
    alignSelf: 'center',
  },
  iconClose: {
    position: 'absolute',
    top: Scale.heightScale * 35,
    left: Scale.widthScale * 20,
    height: Scale.heightScale * 17,
    width: Scale.widthScale * 17
  }
});


const mapStateToProps = state => ({
  loginSuccess: state.user.loginSuccess
});

export default connect(mapStateToProps, { login })(SignIn);