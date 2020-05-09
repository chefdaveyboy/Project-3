import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";
import tempImage from "../../../assets/images/robot-prod.png";



export default class ProfileHeader extends React.Component {
    render() {
      return (
            <View>
                <View style={styles.container}>
                <Image
                source={tempImage}
                style={styles.images}
                />
                <Text style={styles.header}>RachaelDave LLC</Text>
                </View>
            </View>
        
    )  
    }
    
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: "#8459CB",
        // justifyContent: "center",
        alignItems: "center",
           
    },
    header: {
        fontSize: 24,
        color: "#fff",
        paddingBottom: 10,
        marginBottom: 20,
        
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