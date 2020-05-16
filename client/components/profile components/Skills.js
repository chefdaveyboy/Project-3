import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";
import {Header, ErrorText} from "../../auth-components/Shared";
import Rating from "../profile components/Rating";
import * as api from "../../services/rating"
import { Ionicons } from '@expo/vector-icons';
import { set } from 'mongoose';


export default function Skills(props) {

    const [disabled, setDisabled] = useState(false);
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const isPressed = () => {
        setDisabled(true)
    }

    const isPressedIn = async() => {
        setLoading(true)

        let userId = "5ebc8acb978ce80dabded5bc"
        let data = {
            rating: 6,
            skillName: "API Building"
        }

        try {
            console.log("made it here")
            let response = await api.submitRating(userId, data);
            console.log(data)
            console.log(response)
            console.log("made it here")
            setLoading(false);
        }  catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }

      return (
            <View style={styles.container}>
                
                <Text style={styles.text}>{props.skill}</Text>
                <Rating style={styles.stars} disabled={disabled}/>
                <TouchableOpacity style={disabled ? styles.disabledRatings : styles.ratings} disabled={disabled} onPress={isPressed} onPressIn={isPressedIn}>
                    <Text style={styles.btntxt}><Ionicons name="md-star"/></Text>
                </TouchableOpacity>
                
                
            </View>
        
    )  

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