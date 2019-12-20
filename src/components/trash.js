import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { DrawerActions } from 'react-navigation-drawer';
import styles from '../styleSheet';
import { getNotes } from '../controller/controller';

class Trash extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            note: [],
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
            if (notes1.trash === true) {
                return (
                    <View>
                        <TouchableOpacity onLongPress={this.longPressClick} onPress={() => this.props.navigation.navigate('deleteNotes', { display: notes1, key: notes.id })}>
                            <Card containerStyle={{backgroundColor:notes1.color, borderRadius:10}}>
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
                                <Text style={{ fontSize: 17 }}>Trash</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={this.openDraw}>
                                <Image style={[styles.icon, { marginRight: 13 }]}
                                    source={require('../assets/menu1.png')}
                                />
                            </TouchableOpacity>
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
export default Trash