import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
const colorPattern = [
    {
        colorCode: "rgb(255, 255, 255)"
    },
    {
        colorCode: "rgb(242, 139, 130)"
    },
    {
        colorCode: "rgb(215, 174, 251)"
    },
    {
        colorCode: "rgb(255, 192, 203)"
    },
    {
        colorCode: "rgb(167, 255, 235)"
    },
    {
        colorCode: "rgb(251, 188, 4)"
    },
    {
        colorCode: "rgb(174, 203, 250)"
    },
    {
        colorCode: "rgb(232, 234, 237)"
    },
    {
        colorCode: "rgb(203, 240, 248)"
    },
    {
        colorCode: "rgb(230, 201, 168)"
    },
    {
        colorCode: "rgb(255, 255, 0)"
    },
    {
        colorCode: "rgb(204, 255, 144)"
    }
]
export default class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: '',
        }
        this.handleColor = this.handleColor.bind(this)
    }
    async handleColor(color) {
        await this.setState({
            color: color
        })
        this.props.color(this.state.color)
    }
    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.handleColor(item.colorCode)}>
                <View style={{ backgroundColor: item.colorCode, marginLeft: 5, borderRadius: 25, borderColor: 'black', height: 40, width: 40 }}>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View >
                <FlatList horizontal={true}
                    data={colorPattern}
                    renderItem={this.renderItem} />
            </View>
        );
    }
}
