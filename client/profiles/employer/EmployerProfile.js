import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";
import tempImage from "../../assets/images/robot-prod.png";
import { ScrollView } from 'react-native-gesture-handler';

//Profile Components
import ProfileHeader from "../../components/profile components/ProfileHeader";
import EmployeeTabs from "../../components/profile components/EmployeeTabs";

const invited = 0;
const joined = 0;

export default class EmployerProfile extends React.Component {
    render() {
      return (
            <ScrollView>
                <ProfileHeader/>
                <View style={styles.containerMiddle}>
                    <TouchableOpacity style={styles.button1} onPress = {() => this.props.navigation.navigate("EmployerSignUp")}>
                        <Text style={styles.btntext}>Add Employees</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.btntext}>Edit Skills</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerBottom}>
                    <EmployeeTabs/>
                    <EmployeeTabs/>
                    <EmployeeTabs/>
                    <EmployeeTabs/>
                    <EmployeeTabs/>
                    <EmployeeTabs/>
                </View>
            </ScrollView>
        
    )  
    }
    
}

const styles = StyleSheet.create({
    containerMiddle: {
        
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    containerBottom: {
        
        backgroundColor: "#fff",
        alignItems: "center",
    },
    header: {
        fontSize: 24,
        color: "#fff",
        paddingBottom: 10,
        marginBottom: 20,
        
    },
    appText: {
        fontSize: 18,
        color: "#8459CB",
        borderBottomColor: "#8459CB",
        borderBottomWidth: 3,
        padding: 10,


    },
    textinput: {
        
        
        textAlign: "center",
        height: 40,
        marginBottom: 30,
        color: "#fff",
        borderBottomColor: "#f8f8f8",
        borderBottomWidth: 1
        
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
    images: {
        
        marginTop: 50,
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: "#879BB4",
        marginBottom: 30,   

    }
})