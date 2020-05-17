import React from "react";
import StarRating from "react-native-star-rating";
import { Component } from "react";
import { View, StyleSheet} from "react-native";

const rating = 4;

class Rating extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            starCount: rating,
            
        };
    }


    render() {
        return (
            <View style={styles.stars}>
            <StarRating
            disabled={true}
            maxStars={5}
            rating={this.state.starCount}
            halfStarEnabled={true}
            starSize={25}
            />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    stars: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    }
})

export default Rating;