import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, TextInput } from 'react-native'
import styles from '../styleSheet';
import Snackbar from 'react-native-snackbar';
import { createNotes } from '../controller/controller';

export default class TakeNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: [],
            title: '',
            pin: ''
        }
    }
    getpin() {
        this.setState({
            pin: !this.state.pin
        })
    }
    onSubmit = () => {
        try {
            if (this.state.notes === '') {
                Snackbar.show({
                    title: 'Enter the notes'
                })
            }
            else if (this.state.title === '') {
                Snackbar.show({
                    title: 'Enter the Title'
                })
            }
            else {
                let data = {
                    title: this.state.title,
                    description: this.state.description,
                }
                console.warn("res in data", data);

                createNotes(data)
                    .then((res) => {
                        console.log("res in Notes", res);
                        this.props.navigation.navigate('drawerScreen')
                        Snackbar.show({
                            title: 'Notes is SuccessFull',
                            duration: Snackbar.LENGTH_SHORT,
                            action: {
                                title: 'UNDO',
                                color: 'green',
                            },
                        });
                    })
            }
        } catch (error) {
            console.log(error.toString());

        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.data1}>
                    <View>
                        <TouchableOpacity onPress={() => { this.onSubmit() }}>
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
                        onChangeText={(title) => this.setState({ title })}
                        value={this.state.Title}
                    />
                    <TextInput placeholder="Description"
                        style={{ fontSize: 15 }}
                        placeholderTextColor="#a1a5a3"
                        onChangeText={(description) => this.setState({ description })}
                        value={this.state.notes}
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
