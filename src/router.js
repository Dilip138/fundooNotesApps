import { createStackNavigator } from 'react-navigation-stack'
import Login from './components/login';
import SignUp from './components/signUp'
import ForgotPassword from './components/forgotPassword';
import ResetPassword from './components/resetPassword';

const AppNavigator = createStackNavigator({
    login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    signUp: {
        screen: SignUp,
        navigationOptions: {
            header: null
        }
    },
    forgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            header: null
        }
    },
    resetPassword: {
        screen: ResetPassword,
        navigationOptions: {
            header: null
        }
    }
},
    {
        initialRouteName: "login",
    });
export default AppNavigator;