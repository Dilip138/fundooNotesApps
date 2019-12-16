/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for Drawer component Using React-Native
* @file : drawer.js
* @module : createDrawerNavigator,contentOptions
* @author : Dilip
* @version : 1.0
* @since : 4-Dec-2019
******************************************************************************************/
import { createAppContainer } from "react-navigation";
import Trash from '../components/trash';
import Archive from './archive';
import DashBoard from "../components/dashBoard";
import Reminder from './reminder'
import DashBoardAppBar from '../components/dashboardWithAppBar'
import { createDrawerNavigator} from "react-navigation-drawer";

//display the navigation menu using createDrawerNavigator
const drawer = createDrawerNavigator({
    notes:{
        screen:DashBoardAppBar
    },
    // notes:{
    //     screen:DashBoard
    // },
    remainder: {
        screen: Reminder,
    },
    archive: {
        screen: Archive
    },
    trash: {
        screen: Trash
    },
   
},
    { 
        drawerWidth: 280,
        drawerPosition:'left',
        contentOptions: {
            activeTintColor: '#ffffff',
            inactiveTintColor: '#1999CE',

            activeBackgroundColor: '#1999CE',
            inactiveBackgroundColor: '#ffffff',
        }
    }

);
export default AppContainer = createAppContainer(drawer)
