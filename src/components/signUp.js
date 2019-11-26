import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, Image } from 'react-native'
import styles from '../styleSheet'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
        }
      }
      onLogin = () =>{
          this.props.navigation.navigate('login')
      }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ marginBottom: 25, color: 'blue', fontSize: 20 }}>Register</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="First Name"
                        underlineColorAndroid='transparent'
                    //onChangeText={(email) => this.setState({email})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Last Name"
                        underlineColorAndroid='transparent'
                    //onChangeText={(email) => this.setState({email})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                    //onChangeText={(email) => this.setState({email})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                    //onChangeText={(password) => this.setState({password})}
                    />
                </View>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.onLogin}>
                    <Text style={styles.loginText}>SignUp</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
