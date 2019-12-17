import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TouchableHighlight, } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styleSheet';
import { DrawerActions } from 'react-navigation-drawer';
import { ScrollView } from 'react-native-gesture-handler';
import DisplayNotes from './displayNotes';
import { getNotes } from '../controller/controller';
import Menu, { MenuItem } from 'react-native-material-menu';

class DashBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            note: [],
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
    render() {
        let arr = []
        let key;
        arr = this.state.note.map((notes) => {
            //console.warn("res in map", notes)
            return (
                <DisplayNotes display={notes}
                    notekey={key}
                    view={this.state.open}
                    navigation={this.props.navigation}

                />
            )
        })
        return (
            <View style={styles.header}>
                <ScrollView>
                    {!(this.props.view) ?
                        (<Card containerStyle={{ borderRadius: 10, height: 55 }}>
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
                                <Menu
                                    ref={this.setMenuRef}
                                    button={
                                        <TouchableOpacity onPress={this.showMenu}>
                                            <Image style={styles.image} source={require('../assets/menu1.png')} />
                                        </TouchableOpacity>
                                    }>
                                    <MenuItem onPress={this.option1Click}>Archive</MenuItem>
                                    <MenuItem onPress={this.option2Click}>Delete</MenuItem>
                                </Menu>
                            </View>
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
export default DashBoard;