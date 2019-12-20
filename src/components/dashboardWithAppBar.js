/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for DashBoardWithAppBar component Using React-Native
* @file : dashBoardWithAppBar.js
* @module : state,props,,styles,navigationOptions
* @author : Dilip
* @version : 1.0
* @since : 2-Dec-2019
******************************************************************************************/
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TouchableHighlight, } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styleSheet';
import { DrawerActions } from 'react-navigation-drawer';
import { ScrollView } from 'react-native-gesture-handler';
import { getNotes } from '../controller/controller';
import Menu, { MenuItem } from 'react-native-material-menu';

class DashBoardWithAppBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            note: [],
            click: false,
            color: '',
            count: 0,
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
    menu = null;
    setMenuRef = ref => {
        this.menu = ref;
    };
    showMenu = () => {
        this.menu.show();
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
            click: !this.state.click,
            count: (this.state.count) + 1
        })
    }
    onPressClick = () => {
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
    option1Click = () => {
        this.menu.hide();
        this.props.option1Click();
    };
    option2Click = () => {
        this.menu.hide();
        this.props.option2Click();
    };
    render() {
        let borderColor = !this.state.click ? (styles.color) : (styles.color1)
        let pinArr = []
        pinArr = this.state.note.map((notes) => {
            //console.log("res in map2", notes)
            let notes1 = notes.data();
            let take = this.state.open ? (styles.grid) : (styles.list)
            if (notes1.pinned === true && notes1.trash !== true && notes1.archive !== true) {
                return (
                    <View style={take}>
                        <TouchableOpacity onLongPress={(event) => this.longPressClick(event)} onPress={() => this.props.navigation.navigate('editNote', { display: notes1, key: notes.id })} >
                            <Card containerStyle={[{ backgroundColor: notes1.color, borderWidth: 2 }, borderColor]}>
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
        let arr = []
        arr = this.state.note.map((notes) => {
            //console.warn("res in map1", notes)
            let notes1 = notes.data();
            let take = this.state.open ? (styles.grid) : (styles.list)
            if (notes1.pinned === false && notes1.trash !== true && notes1.archive !== true) {
                return (
                    <View style={take}>
                        <TouchableOpacity onLongPress={this.longPressClick} onPress={() => this.props.navigation.navigate('editNote', { display: notes1, key: notes.id })}>
                            <Card containerStyle={[{ backgroundColor: notes1.color }, borderColor]}>
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
            <View style={styles.header}  >
                <ScrollView>
                    {(!this.state.click) ?
                        (<Card containerStyle={{ borderRadius: 10, height: 55, borderWidth: 2 }}>
                            <View style={styles.navBar}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        {/* onpress with drawericon */}
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
                                <Menu
                                    ref={this.setMenuRef}
                                    button={
                                        <TouchableOpacity onPress={this.showMenu}>
                                            <Image style={styles.image} source={require('../assets/menu1.png')} />
                                        </TouchableOpacity>
                                    }>
                                    <View style={{ width: 180 }}>
                                        <MenuItem onPress={this.option1Click}>Archive</MenuItem>
                                        <MenuItem onPress={this.option2Click}>Delete</MenuItem>
                                        <MenuItem>Make a copy</MenuItem>
                                        <MenuItem>Send</MenuItem>
                                    </View>
                                </Menu>
                            </View>
                        </View>)}
                    <View><Text style={{ marginLeft: 20, fontSize: 11 }}>PINNED</Text></View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {pinArr}
                    </View>
                    <View><Text style={{ marginLeft: 20, fontSize: 11 }}>OTHERS</Text></View>
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
                                style={[styles.image1, { borderRadius: 50 }]} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}
export default DashBoardWithAppBar;