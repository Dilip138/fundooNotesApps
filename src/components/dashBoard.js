import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Image, TouchableOpacity,TouchableHighlight } from 'react-native'
import {Card, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../styleSheet';

export default class DashBoard extends Component {
    render() {
        return (
            //     <View style={styles.progressBar}>
            //         <ActivityIndicator size="large" color="green" />


            <View style={styles.header}>
                <Card containerStyle={{ borderRadius: 15, height: 55 }}>
                    <View style={styles.navBar}>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()) }}>
                            <Image style={styles.imageIcon} source={require('../assets/menu.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("search")}>
                            <Text>Search your notes </Text>
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity onPress={(event) => this.gridView(event)}>
                                <Image source={require('../assets/grid.png')}
                                    style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                        {/* <View>
                                <TouchableOpacity onPress={(event) => this.gridView(event)}>
                                    <Image style={styles.IconArrow}
                                        source={require('../assets/list.png')}
                                    />
                                </TouchableOpacity>
                            </View> */}
                        <Avatar rounded title="MD" />
                    </View>
                </Card>
                <View style={styles.footer}>
                <TouchableHighlight
                    style={styles.addNote}
                    //onPress={() => this.props.navigation.navigate('Edit', [this.props.uid, {}])}
                    underlayColor="#EEEEEE">
                    <Text style={styles.addNoteText}>Take a note...</Text>
                </TouchableHighlight>
            </View>
            </View>
            // </View>
        );
    }
}
