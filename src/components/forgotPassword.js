import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, Image } from 'react-native'
import styles from '../styleSheet'

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
        }
      }
    onReset = () =>{
        this.props.navigation.navigate('resetPassword')
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
