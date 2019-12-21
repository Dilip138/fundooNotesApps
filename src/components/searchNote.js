import React, { Component } from 'react';
import { View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from '../styleSheet';
import { getNotes } from '../controller/controller';

export default class SearchNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            note: [],
            filterArr: [],
            click: false
        }
    }
    onPressBack() {
        this.setState({
            click: true
        })
    }
    componentDidMount() {
        getNotes().then((res) => {
            this.setState({
                note: res
            })
        })
    }
    searchFilterFunction = searchText => {
        this.setState({
            searchText: searchText
        })
        let arr = [];
        let newArr = [];
        arr = this.state.note.map((notes) => {
            // let notes1 = notes.data()
            newArr.push(notes.data());
            let filterData = newArr.filter((noteData) => {
                console.warn("title", noteData.title);
                return noteData.title.toLowerCase().search(searchText.toLowerCase()) !== -1 || noteData.description.toLowerCase().search(searchText.toLowerCase()) !== -1
            });
            // console.warn("filterArray data ",filterData);
            this.setState({
                filterArr: filterData
            })
            console.warn("filterArray", this.state.filterArr);

        })
    }
    render() {
        return (
            <View style={[styles.footer, { marginTop: 15 }]}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ margin: 13 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('drawerScreen')}>
                            <Image style={styles.image} source={require('../assets/arrow.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <TextInput style={{ fontSize: 17 }}
                            placeholder="Search your notes"
                            value={this.state.searchText}
                            onChangeText={searchText => this.searchFilterFunction(searchText)} />
                    </View>
                </View>
                <View style={{ margin: 14 }}>
                    <TouchableOpacity onPress={() => this.onPressBack()}>
                        <Image style={styles.image} source={require('../assets/clear.png')}></Image>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
