/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for SignUp component using React-Native
* @file : signUp.js
* @module : state,props,Login,snackBar,userSignUp,styles
* @author : Dilip
* @version : 1.0
* @since : 29-Nov-2019
******************************************************************************************/
import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native'
import styles from '../styleSheet'
import Snackbar from 'react-native-snackbar';
import { userSignUp } from '../controller/controller';
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Assing the value to your firstName,lastName,email,password state
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    }
    onSignUp = () => {
        //check the validation of the firstName,lastName,email and password
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
                //intialize the data in jsonObject formate
                let data = {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    password: this.state.password,
                };
                //passing the data while hetting back-end api of userSignUp
                userSignUp(data)
                    .then(res => {
                        console.log("res in register---------", res);
                        this.props.navigation.navigate('login');
                        Snackbar.show({
                            title: 'Register SuccessFul',
                            duration: Snackbar.LENGTH_SHORT,
                            action: {
                                title: 'UNDO',
                                color: 'green',
                            },
                        });
                    })
                    .catch(err => {
                        console.log("err in register component ", err);
                    });
            }
        }
        catch (error) {
            console.log("error in components", error);
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
                        value={this.state.firstName}
                        onChangeText={(firstName) => this.setState({ firstName })}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Last Name"
                        underlineColorAndroid='transparent'
                        value={this.state.lastName}
                        onChangeText={(lastName) => this.setState({ lastName })}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </View>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.onSignUp}>
                    <Text style={styles.loginText}>SignUp</Text>
                </TouchableHighlight>
            </View>

        );
    }
}
