import React from "react";
import StarRating from "react-native-star-rating";
import { Component } from "react";
import { View, StyleSheet} from "react-native";

const rating = 4;


const Rating = props => {


        return (
            <View style={styles.stars}>
            <StarRating
            disabled={true}
            maxStars={5}
            rating={props.rating}
            halfStarEnabled={true}
            starSize={25}
            key={props.keyName}
            />
            </View>
        );
    }

const styles = StyleSheet.create({
    stars: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    }
})

export default Rating;