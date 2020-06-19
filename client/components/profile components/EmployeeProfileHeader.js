import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";
// import { useAuth } from "../../providers/auth";
import * as api from "../../services/auth";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {ErrorText} from "../../auth-components/Shared";
import tempImage from "../../assets/images/default-profile.png";

export default UpdateProfile = (props) => {

    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    const id = props.myUserId;

   

    
      return (
            
                <View style={styles.container}>
                    
                        <Image
                        source={image ? {uri: image} : tempImage}
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
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: "#879BB4",
        marginBottom: 30,   

    }
})