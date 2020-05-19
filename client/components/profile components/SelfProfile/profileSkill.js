import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";
import Rating from "../SelfProfile/profileRating";


const Skills = props => {
    
    
    return (
        <View style={styles.container}>
            
            <Text style={styles.text}>{props.skill}</Text>
            <Rating rating={props.rating} key={props.keyName} keyName={props.keyName}/>
            <Text style={styles.ratingNum}>Ratings: {props.number}</Text>
            
            
        </View>
    
)  

}

export default Skills

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
    flex: 1,
    fontSize: 15,
    color: "#8459CB",
    margin: 5,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold"
    
},
ratingNum: {
    flex: 1,
    fontSize: 15,
    color: "#A0CB59",
    margin: 5,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold"

}




})