import React, { Component } from 'react';
import {View,Text,Image} from 'react-native';
import styles from '../styleSheet'
export default class Remainder extends Component {
  static navigationOptions = {
    drawerLabel: 'Remainders',
    drawerIcon: () => (
        <Image
            source={require('../assets/notifications.png')}
             style={styles.Icon}
        />
    ),
};
  render() {
    return (
      <View style={{padding:10}} >
      <Text>
        Remainder
      </Text>
    </View>
    );
  }
}
