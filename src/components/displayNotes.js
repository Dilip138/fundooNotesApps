import React, { Component } from 'react';
import { View } from 'react-native';
import { DisplayCards } from 'react-native-elements';
import { getNotes } from '../controller/controller';

export default class DisplayNotes extends Component {
    constructor(props){
        super(props)
        this.state={
            notes:[]
        }
    }
    componentDidMount(){
        getNotes(notesList =>{
            this.setState({
                notes:notesList
            })
        })
    }
    render () {
        let noteArray = [];
        noteArray = this.state.notes.map((note)=> {
            let key = note;
            let noteData = this.state.note[key];
            return (
                <DisplayCards note={noteData}
                    index={key} 
                    />
            )
        })
        return (
            <View style={{flexDirection: 'row',flex:1}}>
                {noteArray}
            </View>

        )
      }
}

