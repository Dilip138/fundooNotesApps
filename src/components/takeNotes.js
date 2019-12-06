import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, TextInput } from 'react-native'
import styles from '../styleSheet'

export default class TakeNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Notes: '',
            Title: '',
            pin: ''

        }
    }
    getpin() {
        this.setState({
            pin: !this.state.pin
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.data1}>
                    <View>
                        <TouchableOpacity onPress={() => { this.submit() }}>
                            <Image style={styles.image2} source={require('../assets/arrow.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.data2}>
                        {!this.state.pin ?
                            (
                                <TouchableOpacity onPress={(event) => this.getpin(event)}>
                                    <Image style={styles.image2} source={require('../assets/pin1.png')}></Image>
                                </TouchableOpacity>
                            )
                            : (
                                <TouchableOpacity onPress={(event) => this.getpin(event)}>
                                    <Image style={styles.image2} source={require('../assets/unpin.png')}></Image>
                                </TouchableOpacity>
                            )}
                        <TouchableOpacity onPress={(event) => this.getArchive(event)}>
                            <Image style={styles.image2} source={require('../assets/alert.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={(event) => this.getArchive(event)}>
                            <Image style={styles.image2} source={require('../assets/archive.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginLeft: 30 }}>
                    <TextInput
                        style={{ fontSize: 25 }}
                        placeholder="Title"
                        placeholderTextColor="#a1a5a3"
                        onChangeText={(Title) => this.setState({ Title })}
                        value={this.state.Title}
                        onSubmitEditing={() => this.Notes.focus()}
                    />
                    <TextInput placeholder="Note"
                        style={{ fontSize: 15 }}
                        placeholderTextColor="#a1a5a3"
                        onChangeText={(Notes) => this.setState({ Notes })}
                        value={this.state.Notes}
                        multiline={this.state.newline}
                        ref={(input) => this.Notes = input}
                    />
                    <Text>{this.state.reminder}</Text>
                </View>
                {/* <Menu
            view={this.state.click}
            color={this.onChangeColor}
            trash={this.handleTrash}
            navigation={this.props.navigation} /> */}
                <View style={{ flex: 1 }}></View>
                <View style={styles.last}>
                    <TouchableOpacity>
                        <Image style={styles.image2} source={require('../assets/plus1.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.getmenu() }}>
                        <Image style={styles.image2} source={require('../assets/menu1.png')}></Image>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
