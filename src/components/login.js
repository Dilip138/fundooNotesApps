import React, { Component } from 'react'
import { View, TextInput, Text, TouchableHighlight, Image, AsyncStorage } from 'react-native'
import styles from '../styleSheet'
import Snackbar from 'react-native-snackbar';
import { userLogin } from '../controller/controller';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  onForgot = () => {
    this.props.navigation.navigate('forgotPassword')
  }
  onRegister = () => {
    this.props.navigation.navigate('signUp')
  }
  onNext = () => {
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
      else if (this.state.password === '') {
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
      else {
        let data = {
          email: this.state.email,
          password: this.state.password
        }
        userLogin(data)
          .then(res => {
            console.log("res in login", res);
            //AsyncStorage.setItem("email", this.state.email)
            //AsyncStorage.setItem(this.state.email, res.data.id)
            this.props.navigation.navigate('forgotPassword');
            Snackbar.show({
              title: 'Login SuccessFul',
              duration: Snackbar.LENGTH_SHORT,
              action: {
                title: 'UNDO',
                color: 'red',
              },
            });
          })
      }
    }
    catch (error) {
      console.log("error in component", error)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 50, height: 50 }}
          source={require('../assets/Person.png')} />
        <Text style={{ marginBottom: 25, color: 'blue', fontSize: 20 }}>Login</Text>
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
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../assets/lock.png')} />
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            value={this.state.password}
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


