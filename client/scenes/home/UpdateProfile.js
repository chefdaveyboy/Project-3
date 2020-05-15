import React, { useState } from 'react';
import {View} from 'react-native';

import * as api from "../../services/auth";
import { useAuth } from "../../providers/auth";

import Form from 'react-native-basic-form';
import {ErrorText} from "../../auth-components/Shared";
import { NavigationContainer } from '@react-navigation/native';

//delete if not working


import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

//----------//


import BottomTabNavigator from '../../navigation/BottomTabNavigator';
import useLinking from '../../navigation/useLinking';

const Stack = createStackNavigator();

export default function UpdateProfile (props) {
    //delete if not working
    
    const [initialNavigationState] = React.useState();
    const containerRef = React.useRef();
    

    const {navigation} = props;

    //1 - DECLARE VARIABLES
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { state, updateUser } = useAuth();

    const fields = [
        {name: 'firstName', label: 'First Name', required: true, value:state.user.firstName},
        {name: 'lastName', label: 'Last Name', required: true, value:state.user.lastName},
        {name: 'username', label: 'Username', required: true, value:state.user.username}
    ];

    async function onSubmit(data) {
        setLoading(true);

        try {
            let response = await api.updateProfile(state.user._id, data);
            updateUser(response.user);

            setLoading(false);

            navigation.goBack();
        } catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }

    let formProps = {title: "Submit", fields, onSubmit, loading };


    
    return (
        <View style={{flex: 1, paddingHorizontal: 16, backgroundColor:"#fff"}}>
            <View style={{flex:1}}>
                
                {/* Delete if not working  */}
                <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
                    <Stack.Navigator>
                        <Stack.Screen name="Root" component={BottomTabNavigator} />
                    </Stack.Navigator>
                </NavigationContainer>
                {/* -------- */}
            </View>
        </View>
    );

};

UpdateProfile.navigationOptions = ({}) => {
    return {
        title: `Level Up Coding`
    }
};