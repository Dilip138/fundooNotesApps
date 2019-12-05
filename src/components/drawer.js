import { createAppContainer } from "react-navigation";
import Trash from '../components/trash';
import Archive from './archive';
import DashBoard from "../components/dashBoard";
import Remainder from '../components/remainder'
import { createDrawerNavigator } from "react-navigation-drawer";
import SignOut from "./signOut";

const drawer = createDrawerNavigator({
    notes: {
        screen: DashBoard,
        navigationOptions: {
            header: null
        }
    },
    remainder: {
        screen: Remainder,
    },
    archive: {
        screen: Archive
    },
    trash: {
        screen: Trash
    },
    signOut:{
        screen:SignOut
    }
},
    {
        drawerPosition: 'left',
        drawerWidth: 280,
        contentOptions: {
            activeTintColor: '#ffffff',
            inactiveTintColor: '#1999CE',

            activeBackgroundColor: '#1999CE',
            inactiveBackgroundColor: '#ffffff',
        }
    }

);
export default AppContainer = createAppContainer(drawer)
