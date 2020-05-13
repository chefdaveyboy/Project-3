import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";

import Rating from "../profile components/Rating";



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
            <View>
                <View style={styles.container}>
                <Text style={styles.text}>Skill</Text>
                <Rating disabled={this.state.disabled}/>
                <TouchableOpacity style={this.state.disabled ? styles.disabledRatings : styles.ratings} disabled={this.state.disabled} onPress={this.isPressed}>
                    <Text style={styles.btntxt}>Submit Rating</Text>
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
        marginTop: 15,
        
           
    },
    containerInner: {
        flexDirection: "column",
        justifyContent: "center"
    },
    text: {
        fontSize: 20,
        color: "#8459CB",
        margin: 10,
        marginBottom: 2
        
    },
    textSecond: {
       fontSize: 10,
       color: "#59cbbd",
       margin: 10,
       marginTop: 2
    },
    images: {
        
        margin: 10,
        marginTop: 15,
        width: 50,
        height: 50,
        borderRadius: 25,  

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
    disabledRatings: {
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        padding: 5,
        backgroundColor: "#BBBBBB",
        borderRadius: 10,
        margin: 10
    },
    btntxt: {
        color: "#fff"
    }
})