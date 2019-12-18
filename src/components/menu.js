import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styleSheet'
const colorPattern = [
    {
        colorCode: "rgb(255, 255, 255)",
        colorName: "White"
    },
    {
        colorCode: "rgb(242, 139, 130)",
        colorName: "Red"
    },
    {
        colorCode: "rgb(215, 174, 251)",
        colorName: "Purple"
    },
    {
        colorCode: "rgb(255, 192, 203)",
        colorName: "Pink"
    },
    {
        colorCode: "rgb(167, 255, 235)",
        colorName: "Teal"
    },
    {
        colorCode: "rgb(251, 188, 4)",
        colorName: "Orange"
    },
    {
        colorCode: "rgb(174, 203, 250)",
        colorName: "Dark Blue"
    },
    {
        colorCode: "rgb(232, 234, 237)",
        colorName: "Gray"
    },
    {
        colorCode: "rgb(203, 240, 248)",
        colorName: "Blue"
    },
    {
        colorCode: "rgb(230, 201, 168)",
        colorName: "Brown"
    },
    {
        colorCode: "rgb(255, 255, 0)",
        colorName: "Yellow"
    },
    {
        colorCode: "rgb(204, 255, 144)",
        colorName: "Green"
    }
]
export default class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: '',
            trash: false,
        }
        //  this.handlecolor = this.handlecolor.bind(this)
        //  this.handleTrash=this.handleTrash.bind(this)
    }
    render() {
        Item = ({ colorCode }) => {
            return (
                <View>
                    <Text>
                        {colorCode}
                    </Text>
                </View>
            )
        }
        return (
            <View >
                <View style={{ margin: 30 }}>
                    <TouchableOpacity >
                        {/* <View style={{paddingTop:20}}>
                            <Image style={{ width: 20 }} source={require('../assets/delete.png')} />
                        </View> */}
                        <Text> Delete </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList horizontal={true}
                        data={colorPattern}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => this.handlecolor(item.colorCode)}>
                                <View style={{ backgroundColor: item.colorCode, marginLeft: 5, borderRadius: 25, height: 40, width: 40, borderColor: 'black', borderWidth: styles.hairlineWidth }}>
                                </View>
                            </TouchableOpacity>}>
                    </FlatList>

                </View>
            </View>
        );
    }
}
