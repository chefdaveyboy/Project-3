import React, { useState } from 'react';
import {View, Constants, Image} from 'react-native';
import * as api from "../../services/auth";
import { useAuth } from "../../providers/auth";
import Form, {TYPES} from 'react-native-basic-form';
import {ErrorText} from "../../auth-components/Shared";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default function UpdateProfile (props) {
    const {navigation} = props;

    //1 - DECLARE VARIABLES
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { state, updateUser } = useAuth();
    const [image, updateImage] = useState(null);


    const fields = [
        {name: 'image', label: 'Profile Image', type: TYPES.Image, value:image},
        {name: 'firstName', label: 'First Name', required,  value:state.user.firstName},
        {name: 'lastName', label: 'Last Name', required, value:state.user.lastName},
        {name: 'username', label: 'Username', required, value:state.user.username},

    ];

    async function onSubmit(data) {
        setLoading(true);

        try {
            let response = await api.updateProfile(state.user._id, data);
            updateUser(response.user);

            setLoading(false);

            navigation.goBack();
        } catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }

    async function getPermissionsAsync() {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };
    
      async function showImagePicker() {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
                updateImage(result.uri)
                console.log(image)
            }
    
        } catch (E) {
          console.log(E);
        }
      };


    let formProps = {title: "Submit", fields, onSubmit, loading, showImagePicker}, source=image;
    return (
        <View style={{flex: 1, paddingHorizontal: 16, backgroundColor:"#fff"}}>
            <View style={{flex:1}}>
                <ErrorText error={error}/>
                <Image source={{uri: image}}/>
                <Form {...formProps}>
                    </Form>
            </View>
        </View>
    );
};

UpdateProfile.navigationOptions = ({}) => {
    return {
        title: `Update Profile`
    }
};