import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";
// import { useAuth } from "../../providers/auth";
import * as api from "../../services/auth";
import * as ImagePicker from 'expo-image-picker';

export default UpdateProfile = (props) => {

    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    const id = props.myUserId;
    console.log(props, "these are our props")

    const uploadImage = async (data) => {
        try {
            console.log("upload image before");
            console.log(data);
            let result = await api.updateProfileImage(id, data);
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
            if (!result.cancelled) {
                
                setImage(result.uri);
                let data = {
                    uri: result.uri,
                    type: `image/${result.uri.split(".")[1]}`,
                    name: `image/${result.uri.split(".")[1]}`
                }
                
                handleUpload(data);
                console.log(data);
                
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleUpload = (image) => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'level-up-coding-rd')
        data.append('cloud_name', 'level-up-coding-rd')

        fetch("https://api.cloudinary.com/v1_1/level-up-coding-rd/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json())
        .then(data => {
            console.log(data.url);
            uploadImage(data.url);
        })
    }

      return (
            
                <View style={styles.container}>
                    <TouchableOpacity onPress={showImagePicker}>
                        <Image
                        source={image ? {uri: image} : props.profileImage}
                        style={styles.images}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>

                    </TouchableOpacity>
                    <Text style={styles.employer}>{props.company}</Text>
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
    employer: {
        fontSize: 30,
        color: "#fff",
        paddingBottom: 10,
        marginBottom: 5

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
        color: "#fff",
        marginTop: 50,
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: "#879BB4",
        marginBottom: 30,   

    }
})