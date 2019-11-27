import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, Image } from 'react-native'
import styles from '../styleSheet'
import Snackbar from 'react-native-snackbar'

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
        }
      }
    onReset = () =>{
      try {
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
        else{
          console.log("forgot true");
          let data = {
            email:this.state.email
          }
          this.props.navigation.navigate('resetPassword')
        }        
    }
    catch(error){
      console.log("error in component",error);
    }
  }
  render() {
    return (
        <View style={styles.container}>
        <Text style={{ marginBottom: 25, color: 'blue', fontSize: 20 }}>ForgotPassword</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../Assets/gmail.jpg')} />
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
