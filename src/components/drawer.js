import React, { Component } from 'react';
import { createAppContainer, createDrawerNavigator, DrawerActions } from "react-navigation";
import Dashboard from '../components/dashBoard';

const drawer = createDrawerNavigator({
    notes: {
        screen:Dashboard,
        navigationOpation: {
            header: null
        }
    },
    reminder: {
        screen: ReminderNotes,
        navigationOpation: {
            header: null

        }
    },
   
    archive: {
        screen: ArchiveNotes,
        navigationOpation: {
            header: null
        }

    },
    trash: {
        screen: TrashNotes,
        navigationOpation: {
            header: null
        }
    }

})
export default drawerContainer = createAppContainer(drawer);
