import React, { useState, useContext } from "react";
import { Text, View, ScrollView, Button, ActivityIndicator, Alert, StyleSheet, TouchableOpacity } from "react-native";

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
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button2} onPress={() => {
                    handleLogout();
                    navigate('Auth');
                }}>
                    <Text style={styles.btntext}>Log Out</Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={styles.button1} onPress={() => navigate("UpdateProfile")}>
                        <Text style={styles.btntext}>Edit Profile</Text>
                </TouchableOpacity>
                </View>
                
                {/* Delete if not working  */}
                <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
                    <Stack.Navigator
                    screenOptions={{headerShown: false}}>
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
    buttonContainer: {
        
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button1: {
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#59cbbd",
        borderRadius: 10,
        margin: 20
        
    },
    button2: {
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#A0CB59",
        borderRadius: 10,
        margin: 20
        
    },
    btntext: {
        color: "#fff",
        fontWeight: "bold"
    },


})