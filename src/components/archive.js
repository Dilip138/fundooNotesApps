import React, { Component } from 'react';
import {View,Text,Image} from 'react-native'
import styles from '../styleSheet'
import {withNavigation} from 'react-navigation'
 class Archieve extends Component {
  static navigationOptions = {
    drawerLabel: 'Archieve',
    drawerIcon: () => (
        <Image
            source={require('../assets/archive.png')}
            style={styles.image}
        />
    ),
};
  render() {
    return (
      <View style={{padding:10}} >
      <Text>
      Archieve
      </Text>
    </View>
    );
  }
}
export default withNavigation(Archieve);
