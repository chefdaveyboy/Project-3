import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from "react-native";


export default class EmployerProfile extends React.Component {
    render() {
      return (
        <View style={styles.container}>
           <Text>This is the Employer Profile</Text>
        </View>
    )  
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3366A4",
        justifyContent: "center",
        alignItems: "center",
           
    },
    header: {
        fontSize: 24,
        color: "#fff",
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: "#199187",
        borderBottomWidth: 1,
    },
    textinput: {
        
        
        textAlign: "center",
        height: 40,
        marginBottom: 30,
        color: "#fff",
        borderBottomColor: "#f8f8f8",
        borderBottomWidth: 1
        
    },
    button: {
        
        alignItems: "center",
        padding: 20,
        backgroundColor: "#59cbbd",
        marginTop: 30    
    },
    btntext: {
        color: "#fff",
        fontWeight: "bold"
    }
})