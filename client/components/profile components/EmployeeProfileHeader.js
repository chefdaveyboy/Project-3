import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";
import tempImage from "../../assets/images/Fergal.jpg";



export default class ProfileHeader extends React.Component {
    render() {
      return (
            
                <View style={styles.container}>
                <Image
                source={tempImage}
                style={styles.images}
                />
                <Text style={styles.header}>{this.props.name}</Text>
                <Text style={styles.text2}>Role: {this.props.role}</Text>
                </View>
            
        
    )  
    }
    
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: "#8459CB",
        alignItems: "center",
           
    },
    header: {
        fontSize: 24,
        color: "#fff",
        paddingBottom: 10,
        marginBottom: 5,
        
    },
    text2: {
        fontSize: 18,
        color: "#A0CB59",
        fontWeight: "900",
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