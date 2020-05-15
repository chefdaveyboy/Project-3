import React from "react";
import StarRating from "react-native-star-rating";
import { Component } from "react";
import { View, StyleSheet} from "react-native";

class Rating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            starCount: 2.5,
            
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating,
        });
    }

    render() {
        return (
            <View style={styles.stars}>
            <StarRating
            disabled={this.props.disabled}
            maxStars={5}
            rating={this.state.starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
            halfStarEnabled={true}
            />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    stars: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center"

    }
})

export default Rating;