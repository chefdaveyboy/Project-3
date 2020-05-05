import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";
import tempImage from "../../assets/images/robot-dev.png";



export default class ProfileHeader extends React.Component {
    render() {
      return (
            <View>
                <View style={styles.container}>
                <Image
                source={tempImage}
                style={styles.images}
                />
                <Text style={styles.text}>Employee Name</Text>
                <TouchableOpacity style={styles.ratings}>
                    <Text style={styles.btntxt}>View Ratings</Text>
                </TouchableOpacity>
                </View>
                
            </View>
        
    )  
    }
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#BBBBBB",
        borderRadius: 10,
        marginBottom: 15,
           
    },
    text: {
        fontSize: 20,
        color: "#8459CB",
        margin: 10,
        
    },
    images: {
        
        margin: 10,
        width: 30,
        height: 30,
        borderRadius: 15,  

    },
    ratings: {
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        padding: 5,
        backgroundColor: "#CB5967",
        borderRadius: 10,
        margin: 10
    },
    btntxt: {
        color: "#fff"
    }
})
