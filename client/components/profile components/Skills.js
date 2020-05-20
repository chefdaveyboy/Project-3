
import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";
import Rating from "../profile components/Rating";
import * as api from "../../services/rating"
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from "../../providers/auth"; 
import StarRating from "react-native-star-rating";
import { useFocusEffect } from '@react-navigation/native';

export default function Skills(props) {

    let userId = props.id
    
    const {getAuthState} = useAuth()
    const [disabled, setDisabled] = useState(false);
    const [message, setMesssage] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [starCount, setStarCount] = useState(2.5)


    useFocusEffect(
        React.useCallback(() => {
            const reSetPage = () => {
                setStarCount(2.5)
                setMesssage(null)
                setDisabled(false)
            }
            return() => reSetPage();}, [userId])
        
    )


    const onStarRatingPress = (rating) => {
        setStarCount(rating)
    }

    const isPressed = () => {
        setDisabled(true)
    }

    const isPressedIn = async() => {
        setLoading(true)

        const user = await getAuthState()

            if (user.user) {
                let postedBy = user.user._id
               
                let userId = props.id 

                let data = {
                    rating: starCount,
                    skillName: props.skill,
                    postedBy: postedBy

                }
                console.log(postedBy, "THIS IS POSTED BY")

        try {
            let response = await api.submitRating(userId, data);
            setLoading(false);


            if (!response.pass) {
                setMesssage("Already rated.")
            } else {
                setMesssage("Rating added!")
            }

        }  catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }
}
    
    return (
        <View style={styles.container}>
            
            <Text style={styles.text}>{props.skill}</Text>
            <View style={styles.stars}>
                {disabled ? <Text>{message}</Text> : 
            <StarRating
            disabled={disabled}
            maxStars={5}
            rating={starCount}
            selectedStar={(rating) => onStarRatingPress(rating)}
            halfStarEnabled={true}
            />
    }
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
},
stars: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"

},

})