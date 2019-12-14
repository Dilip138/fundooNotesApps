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
      <View>
        <TouchableOpacity onPress={this.showDialog}>
          <Text>Show Dialog</Text>
        </TouchableOpacity>
        <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this account? You cannot undo this action.
                </Dialog.Description>
          <Dialog.Button label="Cancel" onPress={this.handleCancel} />
          <Dialog.Button label="Delete" onPress={this.handleDelete} />
        </Dialog.Container>
      </View>
    );
  }
}
