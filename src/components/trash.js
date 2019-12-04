import React, { Component } from 'react';
import {View,Text} from 'react-native'

export default class Trash extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'red',width:200,position:'absolute'}}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
        <Text>
          Page3
        </Text>
      </View>
      </View>
    );
  }
}
