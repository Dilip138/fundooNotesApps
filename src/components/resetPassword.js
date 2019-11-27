import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, Image } from 'react-native'
import styles from '../styleSheet'
import Snackbar from 'react-native-snackbar'

export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          password: '',
          confirmPassword: '',
        }
      }
      onLogin = () => {
        try{
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
          console.log("reset true");
          let data = {
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
          }
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
          <Image style={styles.inputIcon} source={require('../Assets/lock1.png')} />
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../Assets/lock.png')} />
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
