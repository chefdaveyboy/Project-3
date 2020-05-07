import react from 'react';
import {createStackNavigator} from 'react-navigation-stack';

// IMPORT SCREENS
import HomeScreen from "../screens/home/Home";
import UpdateProfileScreen from "../screens/home/UpdateProfile";

import {headerStyle, headerTitleStyle} from '../theme';

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen, 
        UpdateProfile: UpdateProfileScreen,
    },
    {
        initialRouteName: 'Home', 
        defaultNavigationOptions: () => ({headerStyle, headerTitleStyle})
    }
);

export default HomeStack