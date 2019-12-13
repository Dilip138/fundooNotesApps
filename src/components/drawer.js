import { createAppContainer } from "react-navigation";
import Trash from '../components/trash';
import Archive from './archive';
import DashBoard from "../components/dashBoard";
import Reminder from './reminder'
import DashBoardAppBar from '../components/dashboardWithAppBar'
import { createDrawerNavigator} from "react-navigation-drawer";


const drawer = createDrawerNavigator({
    notes:{
        screen:DashBoardAppBar
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
