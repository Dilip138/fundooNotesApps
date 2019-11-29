/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for Forgot component Using React-Native
* @file : forgotPassword.js
* @module : state,props,snackBar,AsyncStorage,userForgot,styles
* @author : Dilip
* @version : 1.0
* @since : 29-Nov-2019
******************************************************************************************/
import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, Image, AsyncStorage } from 'react-native'
import styles from '../styleSheet'
import Snackbar from 'react-native-snackbar'
import { userForgot } from '../controller/controller';
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Assing a value to your email state
      email: '',
    }
  }
  onReset = () => {
    try {
      //check the validation of the email
      if (this.state.email === '') {
        Snackbar.show({
          title: "Email can't be empty",
          duration: Snackbar.LENGTH_SHORT
        })
      }
      else if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.state.email)) {
        Snackbar.show({
          title: "Invalid Email",
          duration: Snackbar.LENGTH_SHORT,
          action: {
            title: 'UNDO',
            color: 'red'
          }
        })
      }
      else {
        console.log("forgot true");
        //intialize the data in jsonObject formate 
        let data = {
          email: this.state.email
        }
        //passing the data while hetting back-end api of userForgot
        userForgot(data)
          .then(res => {
            console.log("res in login", res);
            // AsyncStorage.setItem("email", this.state.email)
            this.props.navigation.navigate('login')
            Snackbar.show({
              title: 'Forgot Done SuccessFully',
              duration: Snackbar.LENGTH_SHORT,
              action: {
                title: 'UNDO',
                color: 'green',
              },
            });
          })
      }
    }
    catch (error) {
      console.log("error in component", error);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 25, color: 'blue', fontSize: 20 }}>ForgotPassword</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../assets/gmail.jpg')} />
          <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
          />
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.onReset}>
          <Text style={styles.loginText}>Next</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
