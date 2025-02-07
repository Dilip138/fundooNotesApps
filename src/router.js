/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for Calling the components Using React-Native
* @file : router.js
* @module : AppNavigator,createStackNavigator,login,signUp,forgotPassword,resetPassword
* @author : Dilip
* @version : 1.0
* @since : 29-Nov-2019
******************************************************************************************/
import { createStackNavigator } from 'react-navigation-stack'
import Login from './components/login';
import SignUp from './components/signUp'
import ForgotPassword from './components/forgotPassword';
import ResetPassword from './components/resetPassword';
import DashBoard from './components/dashBoard';
import AppContainer from './components/drawer';
import TakeNote from './components/takeNotes';
import SignOut from './components/signOut';
import DisplayNotes from './components/displayNotes';
import DashboardWithAppBar from './components/dashboardWithAppBar';
import EditNote from './components/editNote';
import Menu from './components/menu';
import DeleteNotes from './components/deleteNotes';
import SearchNote from './components/searchNote';
const AppNavigator = createStackNavigator({
    //calling the login component
    login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    //calling the drawer component
    drawerScreen: {
        screen: AppContainer,
        navigationOptions: {
            header: null
        }

    },
    //calling the signUp component
    signUp: {
        screen: SignUp,
        navigationOptions: {
            header: null
        }
    },
    //calling the ForgotPassword component
    forgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            header: null
        }
    },
    //calling the ResetPasswoord component 
    resetPassword: {
        screen: ResetPassword,
        navigationOptions: {
            header: null
        }
    },
    // calling the DashBoard component 
    dashBoard: {
        screen: DashboardWithAppBar,
        navigationOptions: {
            header: null
        }
    },
    // dashBoard: {
    //     screen: DashBoard,
    //     navigationOptions: {
    //         header: null
    //     }
    // },
    //calling the takeNotes component
    takeNotes: {
        screen: TakeNote,
        navigationOptions: {
            header: null
        }
    },
    //calling the displayNotes component
    displayNotes: {
        screen: DisplayNotes,
        navigationOptions: {
            header: null
        }
    },
    editNote: {
        screen: EditNote,
        navigationOptions: {
            header: null
        }
    },
    deleteNotes: {
        screen: DeleteNotes,
        navigationOptions: {
            header: null
        }
    },
    menu: {
        screen: Menu,
        navigationOptions: {
            header: null
        }
    },
    searchNote:{
        screen:SearchNote,
        navigationOptions:{
            header:null
        }
    },
    //calling the signOut component
    signOut: {
        screen: SignOut,
        navigationOptions: {
            header: null
        }
    },
},
    {
        initialRouteName: "drawerScreen",
    });
export default AppNavigator;
