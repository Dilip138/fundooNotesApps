import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity,ScrollView } from 'react-native'
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { DrawerActions } from 'react-navigation-drawer';
import {getNotes} from '../controller/controller';
import styles from '../styleSheet'
class Archieve extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      note:[]
    }
  }
  static navigationOptions = {
    drawerLabel: 'Archieve',
    drawerIcon: () => (
      <Image
        source={require('../assets/archive.png')}
        style={styles.image}
      />
    ),
  };
  gridList() {
    this.setState({
      open: !this.state.open
    })
  }
  componentDidMount() {
    getNotes().then((res) => {
      this.setState({
        note: res
      })
    })
  }
  render() {
    let arr = []
    arr = this.state.note.map((notes) => {
      let notes1 = notes.data();
      let take = this.state.open ? (styles.grid) : (styles.list)
      if (notes1.archive === true && notes1.trash !== true) {
        return (
          <View style={take} >
            <TouchableOpacity onLongPress={this.longPressClick} onPress={() => this.props.navigation.navigate('editNote', { display: notes1, key: notes.id })}>
              <Card containerStyle={{ borderRadius: 10 }}>
                <View>
                  <View style={{ padding: 5 }}>
                    <Text>{notes1.title}</Text>
                  </View>
                  <View style={{ padding: 5 }}>
                    <Text>{notes1.description}</Text>
                  </View>
                  <View style={{ padding: 5 }}>
                    <Text>{notes1.reminder}</Text>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          </View>
        )
      }
    })
    return (
      <View>
        <ScrollView>
      <View style={[styles.navBar, { marginTop: 20 }]}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            {/* onpress with drawericon */}
            <TouchableOpacity style={{ marginLeft: 13 }}
              onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
              <Icon name="menu" size={26} />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 25 }}>
            <Text style={{ fontSize: 17 }}>Archive</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginRight: 30 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('search') }}>
              <Image style={styles.image}
                source={require('../assets/search.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ marginRight: 14 }}>
            {!this.state.open ?
              (<View>
                <TouchableOpacity onPress={() => this.gridList()}>
                  <Image source={require('../assets/grid.png')}
                    style={styles.icon} />
                </TouchableOpacity>
              </View>
              ) : (
                <View>
                  <TouchableOpacity onPress={() => this.gridList()}>
                    <Image style={styles.icon}
                      source={require('../assets/list.png')} />
                  </TouchableOpacity>
                </View>)}
          </View>
        </View>
        </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {arr}
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Archieve;
