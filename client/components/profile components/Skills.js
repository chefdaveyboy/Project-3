import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";

import Rating from "../profile components/Rating";

import { Ionicons } from '@expo/vector-icons';


export default class Skills extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        }
    }

    isPressed = () => {
        this.setState({ disabled: true })
        
    }

    render() {
      return (
            <View style={styles.container}>
                
                <Text style={styles.text}>{this.props.skill}</Text>
                <Rating style={styles.stars} disabled={this.state.disabled}/>
                <TouchableOpacity style={this.state.disabled ? styles.disabledRatings : styles.ratings} disabled={this.state.disabled} onPress={this.isPressed}>
                    <Text style={styles.btntxt}><Ionicons name="md-star"/></Text>
                </TouchableOpacity>
                
                
            </View>
        
    )  
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignContent: "stretch",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#BBBBBB",
        borderRadius: 10,
        marginTop: 15,
        
        
        
           
    },
    
    text: {
        flex: 2,
        fontSize: 15,
        color: "#8459CB",
        margin: 5,
        textAlign: "center",
        textAlignVertical: "center"
        
    },
    
    ratings: {
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        padding: 5,
        backgroundColor: "#CB5967",
        borderRadius: 10,
        margin: 5,
        marginLeft: 30,
        
    },
    disabledRatings: {
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        padding: 5,
        backgroundColor: "#BBBBBB",
        borderRadius: 10,
        margin: 5,
        marginLeft: 30
    },
    btntxt: {
        color: "#fff"
    }
})