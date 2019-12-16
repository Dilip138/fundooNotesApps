import React, { Component } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from '../styleSheet'

export default class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false
    }
  };
  static navigationOptions = {
    drawerLabel: 'Reminders',
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
