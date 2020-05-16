import React, { useState, useContext } from "react";
import { Text, View, Button, ActivityIndicator, Alert, StyleSheet } from "react-native";

import { useAuth } from "../../providers/auth";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "../../navigation/BottomTabNavigator";

const Stack = createStackNavigator();

export default function Home(props) {

    const [initialNavigationState] = React.useState();
    const containerRef = React.useRef();


    const {navigate} = props.navigation;

    const {state, handleLogout} = useAuth();
    const user = state.user;

    return (
        <View style={{flex: 1, paddingHorizontal: 16, backgroundColor:"#fff"}}>
            <View style={{flex:1}}>
                <Button style={styles.button} title={"Log Out"} onPress={() => {
                    handleLogout();
                    navigate("Auth");
                    }}/>
                
                <Button title={"Update Profile"} onPress={() => navigate("UpdateProfile")}/>
                
                {/* Delete if not working  */}
                <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
                    <Stack.Navigator>
                        <Stack.Screen name="Profile" component={BottomTabNavigator} />
                    </Stack.Navigator>
                </NavigationContainer>
                {/* -------- */}
                    

                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    welcome: {
        fontSize: 20,
        marginBottom: 20,

    },
    button: {
        marginBottom: 50
    }



})