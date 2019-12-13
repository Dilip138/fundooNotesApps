import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TouchableHighlight, } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styleSheet';
import { DrawerActions } from 'react-navigation-drawer';
import { ScrollView } from 'react-native-gesture-handler';
import { getNotes } from '../controller/controller';
import Dialog from 'react-native-dialog'

class DashBoardWithAppBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            note: [],
            click: false,
            count: 0

        }
    }
    static navigationOptions = {
        drawerLabel: 'Notes',
        drawerIcon: () => (
            <Image
                source={require('../assets/notes.png')}
                style={styles.Icon}
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
    gridList() {
        this.setState({
            open: !this.state.open
        })
    }

    longPressClick = () => {
        this.setState({
            click: true,
            count: (this.state.count) + 1
        })

    }
    onPressBack = () => {
        this.setState({
            click: !(this.state.click),
            count: 0
        })
    }
    render() {
        let arr = []
        let key;
        arr = this.state.note.map((notes) => {
            console.log("res in map1", notes)
            let take = this.state.open ? (styles.grid) : (styles.list)
            return (
                <View style={take}>
                    <TouchableOpacity onLongPress={this.longPressClick} >
                        <Card containerStyle={{ borderWidth: 2, borderColor: "black", borderRadius: 10 }}>
                            <View>
                                <View style={{ padding: 5 }}>
                                    <Text>{notes.title}</Text>
                                </View>
                                <View style={{ padding: 5 }}>
                                    <Text>{notes.description}</Text>
                                </View>
                                <View style={{ padding: 5 }}>
                                    <Text>{notes.reminder}</Text>
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>
                </View>
            )
        })
        return (
            <View style={styles.header}>
                <ScrollView>

                    {(!this.state.click) ?
                        (<Card containerStyle={{ borderRadius: 10, height: 55, borderWidth: 2 }}>
                            <View style={styles.navBar}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        <TouchableOpacity
                                            onPress={() =>
                                                this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                                            <Icon name="menu" size={26} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginLeft: 25 }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('search')}>
                                            <Text style={{ fontSize: 17 }}>Search your notes </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
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
                                            </View>
                                        )}
                                    <View>
                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('signOut') }}>
                                            <Image style={styles.icon1}
                                                source={require('../assets/profile.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Card>) :
                        (<View style={styles.appBar}>
                            <View style={{ margin: 15 }}>
                                <TouchableOpacity onPress={this.onPressBack}>
                                    <Image style={styles.image} source={require('../assets/clear.png')} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ margin: 15 }}>
                                <TouchableOpacity>
                                    <Text>{this.state.count}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ margin: 15 }}>
                                <TouchableOpacity onPress={this.showDialog}>
                                    <Image style={styles.image} source={require('../assets/menu1.png')} />
                                </TouchableOpacity>
                            </View>
                            <Dialog.Container visible={this.state.dialogVisible}>
                                <TouchableOpacity onPress={this.showDialog}>
                                    <Text>Archive</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.showDialog}>
                                    <Text>Delete</Text>
                                </TouchableOpacity>
                            </Dialog.Container>
                        </View>)}
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {arr}
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <View style={styles.data3}>
                        <TouchableHighlight style={styles.imageIcon}>
                            <Image source={require('../assets/checkbox.png')}
                                style={styles.image} />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.imageIcon}>
                            <Image source={require('../assets/brush.png')}
                                style={styles.image} />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.imageIcon}>
                            <Image source={require('../assets/photo.png')}
                                style={styles.image} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.plus}>
                        <TouchableHighlight style={styles.imageIcon}
                            onPress={() => { this.props.navigation.navigate('takeNotes') }}>
                            <Image source={require('../assets/plus2.jpg')}
                                style={styles.image1} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}
export default DashBoardWithAppBar;