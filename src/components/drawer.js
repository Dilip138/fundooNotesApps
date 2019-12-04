import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer'
import SideMenu from '../components/sideMenu';
import Trash from '../components/trash';
import Archieve from "./archieve";
//import DashBoard from "../components/dashBoard";
import Remainder from "./remainder";

const drawer = createDrawerNavigator({
    trash: {
        screen: Trash
    },
    archieve: {
        screen: Archieve
    },
    remainder: {
        screen: Remainder
    }
},
    {
        contentComponent: SideMenu,
        drawerWidth: 300
    }
)
export default AppContainer = createAppContainer(drawer);


