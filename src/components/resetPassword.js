/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for ResetPassword component Using React-Native
* @file : resetPassword.js
* @module : state,props,Reset,snackBar,styles
* @author : Dilip
* @version : 1.0
* @since : 29-Nov-2019
******************************************************************************************/
import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, Image } from 'react-native'
import styles from '../styleSheet'
import Snackbar from 'react-native-snackbar'
export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Assing the value password and confirmPassword state
      password: '',
      confirmPassword: '',
    }
  }
  onLogin = () => {
    //check the validation of the password and confirmPassword
    try {
      if (this.state.password === '') {
        Snackbar.show({
          title: "Password can't be empty",
          duration: Snackbar.LENGTH_SHORT
        })
      }
      else if (this.state.password.length < 8) {
        Snackbar.show({
          title: "Password at least 8 character",
          duration: Snackbar.LENGTH_SHORT,
          action: {
            title: 'UNDO',
            color: 'red'
          }
        })
      }
      else if (this.state.confirmPassword === '') {
        Snackbar.show({
          title: "ConfirmPassword can't be empty",
          duration: Snackbar.LENGTH_SHORT
        })
      }
      else if (this.state.confirmPassword.length < 8) {
        Snackbar.show({
          title: "ConfirmPassword at least 8 character",
          duration: Snackbar.LENGTH_SHORT,
          action: {
            title: 'UNDO',
            color: 'red'
          }
        })
      }
      else {
        Snackbar.show({
          title: 'New Password Successful',
          duration: Snackbar.LENGTH_SHORT,
          action: {
            title: 'UNDO',
            color: 'green',
          },
        });
        this.props.navigation.navigate('login')
      }
    }
    catch (error) {
      console.log("error in component", error)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 25, color: 'blue', fontSize: 20 }}>ResetPassword</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../assets/lock1.png')} />
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../assets/lock.png')} />
          <TextInput style={styles.inputs}
            placeholder="Confirm Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            value={this.state.confirmPassword}
            onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
          />
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.onLogin}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
