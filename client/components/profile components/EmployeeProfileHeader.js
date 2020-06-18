import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";
// import { useAuth } from "../../providers/auth";
import * as api from "../../services/auth";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {ErrorText} from "../../auth-components/Shared";

export default UpdateProfile = (props) => {

    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    const id = props.myUserId;

    const uploadImage = async () => {
        try {
            console.log(id)
            console.log("upload image before");
            console.log(image);
            let result = await api.updateProfileImage(id, image);
            console.log(result);
            console.log("upload image after");
        } catch (error) {
            setError(error.message);
        }
    }

    const showImagePicker = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.cancelled && result) {
                setImage(result.uri);
                uploadImage(image);
            }
        } catch (error) {
            console.log(error)
        }
    };
      return (
            
                <View style={styles.container}>
                    
                        <Image
                        source={image ? {uri: image} : props.image}
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
        fontWeight: "900",
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