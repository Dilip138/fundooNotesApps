import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Card, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../styleSheet';

export default class DashBoard extends Component {
    render() {
        return (
            //     <View>
            //         <ActivityIndicator size="large" color="green" />


            //<View style ={styles.headerfooter}>
            <View style={styles.header}>
                <Card containerStyle={{ borderRadius: 10, height: 55 }}>
                    <View style={styles.navBar}>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()) }}>
                            <Icon name="menu" size={26} />
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
                                    <Image style={styles.icon}
                                        source={require('../assets/list.png')}
                                    />
                                </TouchableOpacity>
                            </View> */}
                        <Avatar rounded title="MD" />
                    </View>
                </Card>
                {/* </View> */}
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
                        <TouchableHighlight style={styles.imageIcon}>
                            {/* onPress={() => this.props.navigation.navigate('Edit', [this.props.uid, {}])} */}
                            <Image source={require('../assets/plus.jpg')}
                                style={styles.image1} />
                        </TouchableHighlight>
                </View>
            </View>

        );
    }
}
