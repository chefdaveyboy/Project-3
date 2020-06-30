import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import tempImage from "../../assets/images/default-profile.png";


const EmployeeTabs = props => {

    
      return (
            <View>
                <View style={styles.container}>
                <Image
                source={tempImage}
                style={styles.images}
                />
                <View style={styles.containerInner}>
                    <Text style={styles.text}>{props.name} {props.lastName}</Text>
                    <Text style={styles.textSecond}>Role: {props.role}</Text>
                </View>
                <TouchableOpacity style={styles.ratings} >
                    <Text style={styles.btntxt}>Submit Rating</Text>
                </TouchableOpacity>
                </View>
                
            </View>
        
    )  
    }

export default EmployeeTabs;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#BBBBBB",
        borderRadius: 10,
        marginBottom: 15,
        
           
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
        borderRadius: 5,  

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
    btntxt: {
        color: "#fff"
    }
})

