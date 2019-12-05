import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Card, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../styleSheet';
import { withNavigation } from 'react-navigation'

class Trash extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            notes: [],
        }
    }
    static navigationOptions = {
        drawerLabel: 'Trash',
        drawerIcon: () => (
            <Image
                source={require('../assets/delete.png')}
                style={styles.icon}
            />
        ),
    };
    render() {

        return (
            //     <View>
            //         <ActivityIndicator size="large" color="green" />

            <View style={styles.header}>
                <Text>hello</Text>
            </View>
        );
    }
}
export default withNavigation(Trash);