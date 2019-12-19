/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for takeNotes component Using React-Native
* @file : takeNotes.js
* @module : state,props,,styles,createNotes,DateTimePicker
* @author : Dilip
* @version : 1.0
* @since : 6-Dec-2019
******************************************************************************************/
import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, TextInput, Picker } from 'react-native';
import styles from '../styleSheet';
import Snackbar from 'react-native-snackbar';
import { createNotes } from '../controller/controller';
import Dialog from 'react-native-dialog';
import DateTimePicker from "react-native-modal-datetime-picker";
import RBSheet from "react-native-raw-bottom-sheet";
import { trashNotes } from '../controller/controller';
import Menu from '../components/menu';
export default class TakeNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            title: '',
            archive: false,
            pinned: false,
            trash: false,
            color: '',
            isDatePickerVisible: false,
            dialogVisible: false,
            reminder: '',
            PickerValue: '',
            isTimePickerVisible: false,
            date: '',
            time: ''
        }
        this.onChangeColor = this.onChangeColor.bind(this)
    }
    onChangeColor = (color) => {
        this.setState({
            color: color
        })
        //console.warn("color",color)
    }
    handleTrash = () => {
        this.setState({
            trash: !this.state.trash
        })
        let data = {
            trash: this.state.trash,
        }
        trashNotes(data)
        this.props.navigation.navigate('drawerScreen')

    }
    showDialog = () => {
        this.setState({ dialogVisible: true });
    };
    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };
    // The user has pressed the "Save" button, so save the date and time with notes
    handleSave = () => {
        let dateTime = this.state.date + '  ' + this.state.time
        console.warn(dateTime + " in take date")
        if (dateTime !== '') {
            this.setState({
                reminder: dateTime,
                dialogVisible: false
            });
        };
    };
    getArchive() {
        this.props.navigation.navigate('archive')
    }
    showDatePicker = () => {
        this.setState({ isDatePickerVisible: true });
    };
    hideDatePicker = () => {
        this.setState({ isDatePickerVisible: false });
    };
    showTimePicker = () => {
        this.setState({ isTimePickerVisible: true });
    }
    hideTimePicker = () => {
        this.setState({ isTimePickerVisible: false });
    }
    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        let date1 = '' + date
        let date2 = date1.slice(4, 10)
        this.setState({
            date: date2
        })
        this.hideDatePicker();
    };
    handleTimePicked = time => {
        console.log("A time has been picked: ", time);
        let time1 = '' + time
        let time2 = time1.slice(16, 21)
        this.setState({
            time: time2
        })
        this.hideTimePicker();
    }
    getpin() {
        this.setState({
            pinned: !this.state.pinned
        })
    }
    menu = null;
    setMenuRef = ref => {
        this.menu = ref;
    };
    showMenu = () => {
        this.menu.show();
    };
    onSubmit = () => {
        try {
            let data = {
                title: this.state.title,
                description: this.state.description,
                reminder: this.state.reminder,
                archive: this.state.archive,
                pinned: this.state.pinned,
                color: this.state.color,
                trash: this.state.trash,
            }
            console.warn("res in data", data);

            if (data.title == '' && data.description == '') {
                this.props.navigation.navigate('drawerScreen')
                Snackbar.show({
                    title: 'Empty note Discarded',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: '',
                        color: 'red',
                    },
                });
            }
            else {
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
            <View style={{ flex: 1, backgroundColor: this.state.color}}>
                <View style={styles.data1}>
                    <View>
                        <TouchableOpacity onPress={() => { this.onSubmit() }}>
                            <Image style={styles.image2} source={require('../assets/arrow.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.data2}>
                        {!this.state.pinned ?
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
                        <TouchableOpacity onPress={(event) => this.showDialog(event)}>
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
                        value={this.state.title} />
                    <TextInput placeholder="Description"
                        style={{ fontSize: 15 }}
                        placeholderTextColor="#a1a5a3"
                        onChangeText={(description) => this.setState({ description })}
                        value={this.state.description} />
                    <Text>{this.state.reminder}</Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={styles.last}>
                    <TouchableOpacity>
                        <Image style={styles.image2} source={require('../assets/plus1.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.RBSheet.open()}>
                        <RBSheet
                            ref={ref => {
                                this.RBSheet = ref;
                            }}
                            height={200}
                            duration={250}
                            customStyles={{
                                container: {
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start'
                                }
                            }}>
                            <View style={{ margin: 30 }}>
                                <TouchableOpacity onPress={this.handleTrash}>
                                    <Text> Delete </Text>
                                </TouchableOpacity>
                            </View>
                            <Menu
                                color={this.onChangeColor}
                                navigation={this.props.navigation}
                            />
                        </RBSheet>
                        <Image style={styles.image2} source={require('../assets/menu1.png')}></Image>
                    </TouchableOpacity>
                    <Dialog.Container visible={this.state.dialogVisible}>
                        <Dialog.Title> Add reminder</Dialog.Title>
                        <View>
                            <TouchableOpacity onPress={this.showDatePicker}>
                                <Picker
                                    style={{ width: '100%' }}
                                    selectedValue={this.state.PickerValue}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ PickerValue: itemValue })} >
                                    <Picker.Item label="Pick a date..." />
                                </Picker>
                            </TouchableOpacity>
                            <Text>{this.state.date}</Text>
                            <DateTimePicker
                                mode='date'
                                isVisible={this.state.isDatePickerVisible}
                                onConfirm={this.handleDatePicked}
                                onCancel={this.hideDatePicker} />
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.showTimePicker}>
                                <Picker
                                    style={{ width: '100%' }}
                                    selectedValue={this.state.PickerValue}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ PickerValue: itemValue })} >
                                    <Picker.Item label="Pick a time..." />
                                </Picker>
                            </TouchableOpacity>
                            <Text>{this.state.time}</Text>
                            <DateTimePicker
                                mode='time'
                                isVisible={this.state.isTimePickerVisible}
                                onConfirm={this.handleTimePicked}
                                onCancel={this.hideTimePicker} />
                        </View>
                        <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                        <Dialog.Button label="save" onPress={this.handleSave} />
                    </Dialog.Container>
                </View>
            </View>
        );
    }
}
