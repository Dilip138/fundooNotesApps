import React, { Component } from 'react';
import { View, ScrollView, SafeAreaView, TouchableOpacity,Text } from 'react-native';
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../styleSheet'

export default class DisplayNotes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }
  render() {
    return (
      <View >
        <Card containerStyle={{borderRadius: 10 }}>
         <Text>{this.props.note.title}</Text>
         <Text>{this.props.note.description}</Text>
        </Card>
      </View>
    )
  }
}

