import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default UpdateProfile = (props) => {

    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    
      return (
            
                <View style={styles.container}>
                    
                        <Image
                        source={image ? {uri: image} : props.profileImage}
                        style={styles.images}
                        />
                    
                    
                    <Text style={styles.header}>{props.name}</Text>
                    <Text style={styles.text2}>Role: {props.role}</Text>
                </View>
            
        
    )  
    }
    


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8459CB",
        alignItems: "center",
        borderRadius: 10
           
    },
    header: {
        fontSize: 24,
        color: "#fff",
        paddingBottom: 10,
        marginBottom: 5,
        
    },
    text2: {
        fontSize: 18,
        color: "#A0CB59",
        fontWeight: "bold",
        marginBottom: 20,
    },
    images: {
        
        marginTop: 50,
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "#879BB4",
        marginBottom: 30,   

    }
})