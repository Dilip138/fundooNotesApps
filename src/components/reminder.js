import React, { Component } from "react";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import styles from '../styleSheet';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from 'react-navigation-drawer';
import { Card } from 'react-native-elements';
import { getNotes } from "../controller/controller";

export default class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      note: []
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
      if (notes1.reminder !== '' && notes1.trash !== true) {
        return (
          <View style={take}>
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
                <Text style={{ fontSize: 17 }}>Reminders</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ marginRight: 30 }}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('serach') }}>
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
