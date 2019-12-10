import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Card, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../styleSheet';
// import DisplayNotes from './displayNotes'
import { DrawerActions } from 'react-navigation-drawer'
import { withNavigation } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import DisplayNotes from './displayNotes';
import { getNotes } from '../controller/controller';
// import DisplayNotes from './displayNotes';

class DashBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            notes: [],
            click:false
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
            console.warn("res in view ", res);
        })
    }
    handleDrawerOpen = () => {
        this.setState({
            open: true
        })
    }
    gridList() {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        var arr1 = []
        var key;
        var data;
        arr1 =this.state.notes.map((notes) => {
            key = notes;
            data = this.state.note[key]
           // console.warn(data)
                return (
                        <DisplayNotes note={data}
                            notekey={key}
                            // view={this.state.click}
                            // navigation={this.props.navigation}
                        />
                )
        })
        return (
            //     <View>
            //         <ActivityIndicator size="large" color="green" />

            <View style={styles.header}>
                <Card containerStyle={{ borderRadius: 10, height: 55 }}>
                    <View style={styles.navBar}>
                        <View>
                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                                <Icon name="menu" size={26} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('search')}>
                                <Text>Search your notes </Text>
                            </TouchableOpacity>
                        </View>
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
                                            source={require('../assets/list1.png')}
                                        />
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
                </Card>
                <ScrollView>
                    <View><Text style={styles.margin}>other</Text></View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {arr1}
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableHighlight style={styles.imageIcon}>
                        {/* onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()) }} */}
                        <Image source={require('../assets/checkbox.png')}
                            style={styles.image} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.imageIcon}>
                        {/* onPress={() => this.props.navigation.navigate('Edit', [this.props.uid, {}])} */}
                        <Image source={require('../assets/brush.png')}
                            style={styles.image} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.imageIcon}>
                        {/* onPress={() => this.props.navigation.navigate('Edit', [this.props.uid, {}])} */}
                        <Image source={require('../assets/photo.png')}
                            style={styles.image} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.imageIcon}
                        onPress={() => { this.props.navigation.navigate('takeNotes') }}>
                        <Image source={require('../assets/plus.jpg')}
                            style={styles.image1} />
                    </TouchableHighlight>

                </View>
            </View>
        );
    }
}
export default withNavigation(DashBoard);