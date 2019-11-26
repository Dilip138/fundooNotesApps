import React, { Component } from 'react'
import { View, TextInput, Text, TouchableHighlight, Image } from 'react-native'
import styles from '../styleSheet'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  onForgot = () =>{
    this.props.navigation.navigate('forgotPassword')
  }
  onRegister = () =>{
    this.props.navigation.navigate('signUp')
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 50, height: 50 }}
          source={require('../Assets/Person.png')} />
        <Text style={{ marginBottom: 25, color: 'blue', fontSize: 20 }}>Login</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../Assets/gmail.jpg')} />
          <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({ email })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../Assets/lock.png')} />
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })}
          />
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onNext('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={this.onForgot}>
          <Text style={styles.Text}>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={this.onRegister}>
          <Text style={styles.Text}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


