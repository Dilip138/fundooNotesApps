import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, Image } from 'react-native'
import style from '../styleSheet'
import { userSignOut } from '../controller/controller';

export default class SignOut extends Component {
    static navigationOptions = {
        header: null
    };
    handle() {
        userSignOut()
            .then((res) => {
                console.log("res in signOut", res);
                this.props.navigation.navigate('login')
            })
    }
    render() {
        return (
            <View style={style.container1}>
                <View style={style.container2}>
                    <View style={style.container3}>
                        <TouchableOpacity >
                            <Image style={style.image2} source={require('../assets/profile.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <Text style={style.text1}>Do you want to Signout?</Text>
                </View>
                <View style={style.containerButton}>
                    <Button title='Yes'
                        onPress={() =>
                            this.handle()
                        }
                    ></Button>
                    <Text>    </Text>
                    <Button title='No'
                        onPress={() => this.props.navigation.navigate('drawerScreen')}
                    ></Button>
                </View>
            </View>


        );
    }
}
