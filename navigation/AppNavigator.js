import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import MainScreen from '../screens/MainScreen';
import DiceScreen from '../screens/DiceScreen';
import CurrencyScreen from '../screens/CurrencyScreen';
import TodoScreen from '../screens/TodoScreen';

const AppNavigator = createStackNavigator({
    Login: LoginScreen,
    Registration: RegistrationScreen,
    Main: MainScreen,
    Dice: DiceScreen,
    Currency: CurrencyScreen,
    Todo: TodoScreen
});

// {
//     headerMode: 'none',
//     navigationOptions: {
//         headerVisible: false,
//     }
// };


export default createAppContainer(AppNavigator);