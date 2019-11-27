import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight} from 'react-native'
import styles from '../styleSheet'
import Snackbar from 'react-native-snackbar'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    }
    onSignUp = () => {
        try {
            if (this.state.firstName === "") {
                Snackbar.show({
                    title: "FirstName can't be empty",
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'red',
                    },
                });
            }
            else if (!/^[A-Za-z]+$/.test(this.state.firstName)) {
                Snackbar.show({
                    title: 'FirstName must be alphabets',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'red',
                    },
                });
            }
            else if (this.state.lastName === "") {
                Snackbar.show({
                    title: "LastName can't be empty",
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'red',
                    },
                });

            }
            else if (!/^[A-Za-z]+$/.test(this.state.lastName)) {
                Snackbar.show({
                    title: 'LastName must be alphabets',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'red',
                    },
                });
            }
            else if (this.state.email === "") {
                Snackbar.show({
                    title: "Email can't be empty",
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'red',
                    },
                });

            }
            else if (
                !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.state.email)
            ) {
                Snackbar.show({
                    title: 'Invalid Email',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'red',
                    },
                });
            }
            else if (this.state.password === "") {
                Snackbar.show({
                    title: "Password can't be empty",
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'red',
                    },
                });

            }
            else if (this.state.password.length < 8) {
                Snackbar.show({
                    title: 'Password at least 8 character',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'red',
                    },
                });             
            } else {
                console.log("Register true");
                let data = {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    password: this.state.password,
                    service: "basic"
                };
                this.props.navigation.navigate('login')
            }
        }
        catch(error){
            console.log("error in components",error);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ marginBottom: 25, color: 'blue', fontSize: 20 }}>Register</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="First Name"
                        underlineColorAndroid='transparent'
                    onChangeText={(firstName) => this.setState({firstName})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Last Name"
                        underlineColorAndroid='transparent'
                    onChangeText={(lastName) => this.setState({lastName})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                    onChangeText={(email) => this.setState({email})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                    onChangeText={(password) => this.setState({password})}
                    />
                </View>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.onSignUp}>
                    <Text style={styles.loginText}>SignUp</Text>
                </TouchableHighlight>
            </View>

        );
    }
}
