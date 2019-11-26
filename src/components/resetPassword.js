import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, Image } from 'react-native'
import styles from '../styleSheet'

export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          password: '',
          confirmPassword: '',
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
            onChangeText={(email) => this.setState({ email })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../Assets/lock.png')} />
          <TextInput style={styles.inputs}
            placeholder="Confirm Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })}
          />
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableHighlight>
        </View>
    );
  }
}
