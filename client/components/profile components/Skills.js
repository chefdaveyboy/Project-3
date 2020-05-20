
import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";
import Rating from "../profile components/Rating";
import * as api from "../../services/rating"
import { Ionicons } from '@expo/vector-icons';


export default function Skills(props) {
    
    
    const [disabled, setDisabled] = useState(false);
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const isPressed = () => {
        setDisabled(true)
    }

    const isPressedIn = async() => {
        setLoading(true)

        let userId = "5ec014a14a03ec259cbe18dd"
        let data = 
        {
            rating: rating,
            skillName: "API Building",
            postedBy: "bob@bobby.com"
        }

        console.log("____>",data, "_____>")

        try {
            let response = await api.submitRating(userId, data);
            setLoading(false);
        }  catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }
    

    return (
        <View style={styles.container}>
            
            <Text style={styles.text}>{props.skill}</Text>
            <View style={styles.stars}>
            <StarRating
            disabled={state.disabled}
            maxStars={5}
            rating={state.starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
            halfStarEnabled={true}
            />
            </View>
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