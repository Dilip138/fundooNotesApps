import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Card } from 'react-native-elements'
import styles from '../styleSheet'

export default class DisplayNotes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      click:false,
    }
  }
  render() {
    let take = this.props.view ? (styles.grid) : (styles.list)
    // console.warn("display",this.props.display)
    return (
      <View style={take}>
        <Card containerStyle={{ borderRadius: 10 }}>
          <View>
            <View style={{ padding: 5 }}>
              <Text>{this.props.display.title}</Text>
            </View>
            <View style={{ padding: 5 }}>
              <Text>{this.props.display.description}</Text>
            </View>
            <View style={{ padding: 5 }}>
              <Text>{this.props.display.reminder}</Text>
            </View>
          </View>
        </Card>
      </View>
    )
  }
}

