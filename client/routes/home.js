//NOT THE PROBLEM
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

//IMPORT SCENES
import HomeScreen from "../scenes/home/Home";
import UpdateProfileScreen from "../scenes/home/UpdateProfile";

import {headerStyle, headerTitleStyle} from '../theme'
import Colleagues from '../profiles/employee/Colleagues';


const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            
        },
        UpdateProfile: UpdateProfileScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: () => ({headerStyle, headerTitleStyle})
    }
);

export default HomeStack;