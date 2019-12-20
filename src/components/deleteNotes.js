import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import styles from '../styleSheet';
import RBSheet from 'react-native-raw-bottom-sheet';
import Snackbar from 'react-native-snackbar';
import { deleteNotes, restoreNotes } from '../controller/controller';

export default class DeleteNotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.navigation.state.params.display.title,
            description: this.props.navigation.state.params.display.description,
        }
    }
    handleDelete = () => {
        try {
            deleteNotes(this.props.navigation.state.params.key)
                .then((res) => {
                    console.log("res in deleteNotes", res)
                    this.props.navigation.navigate('drawerScreen')
                    Snackbar.show({
                        title: 'DeleteNotes is SuccessFull',
                        duration: Snackbar.LENGTH_SHORT,
                        action: {
                            title: 'UNDO',
                            color: 'green',
                        },
                    });
                })
        }
        catch (error) {
            console.log("error in deleteNotes", error);
        }
    }
    handleRestore = () => {
        try {
            let data = {
                trash:this.props.navigation.state.params.display.trash,
                key:this.props.navigation.state.params.key
            }
            //console.warn("res in restoreNotes",data.trash)
            restoreNotes(data)
                .then((res) => {
                    console.log("res in restoreNotes", res)
                    this.props.navigation.navigate('drawerScreen')
                    Snackbar.show({
                        title: 'RestoreNotes is SuccessFull',
                        duration: Snackbar.LENGTH_SHORT,
                        action: {
                            title: 'UNDO',
                            color: 'green',
                        },
                    });
                })
        }
        catch (error) {
            console.log("error in deleteNotes", error);
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.data1}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('trash')}>
                        <Image style={styles.image2} source={require('../assets/arrow.png')} />
                    </TouchableOpacity>
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
                            height={100}
                            duration={250}
                            customStyles={{
                                container: {
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start'
                                }
                            }}>
                            <View style={{ margin: 20 }}>
                                <View>
                                    <TouchableOpacity onPress={this.handleRestore}>
                                        <Text> Restore </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginTop: 16 }}>
                                    <TouchableOpacity onPress={this.handleDelete}>
                                        <Text> Delete forever </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </RBSheet>
                        <Image style={styles.image2} source={require('../assets/menu1.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
