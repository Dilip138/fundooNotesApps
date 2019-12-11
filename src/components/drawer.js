import { createAppContainer } from "react-navigation";
import Trash from '../components/trash';
import Archive from './archive';
import DashBoard from "../components/dashBoard";
import Reminder from './reminder'
import { createDrawerNavigator } from "react-navigation-drawer";

const drawer = createDrawerNavigator({
    notes: {
        screen: DashBoard,
    },
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
