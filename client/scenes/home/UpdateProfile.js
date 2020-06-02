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

    const options = [
      {label: "Front End Developer", value:"Front End Developer"},
      {label: "Back End Developer", value:"Back End Developer"},
      {label: "Full Stack Developer", value: "Full Stack Developer"},
      {label: "Database Manager", value: "Database Manager"},
      {label: "Software Engineer", value: "Software Engineer"},
      {label: "Product Manager", value: "Product Manager"},
      {label: "Web Developer", value: "Web Developer"},
      {label: ".NET Developer", value: ".NET Developer"},
      {label: "Java Developer", value: "Java Developer"},
      {label: "Quality Assurance Engineer", value: "Quality Assurance Engineer"},
      {label: "Software Developer", value: "Software Developer"},
      {label: "Systems Architect", value: "Systems Architect"},
      {label: "Application Developer", value: "Application Developer"},
      {label: "Developer", value: "Developer"}
  ]

  const fields = [
    //Profile Image DOES NOT WORK!!
      {name: 'image', label: 'Profile Image', type: TYPES.Image},
      {name: 'username', label:'Username', required: true},
      {name: 'firstName', label: 'First Name', required: true},
      {name: 'lastName', label: 'Last Name', required: true},
      {name: 'password', label: 'Password', required: true, secure:true},
      {name: 'jobRole', label: 'Job Title or Role', required: true, type: TYPES.Dropdown, options: options}
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
              updateImage(result.uri);
              
            }
    
        } catch (E) {
          console.log(E);
        }
      };


    let formProps = {title: "Submit", fields, onSubmit, loading, showImagePicker};
    return (
        <View style={{flex: 1, paddingHorizontal: 16, backgroundColor:"#fff"}}>
            <View style={{flex:1}}>
                <ErrorText error={error}/>
                <Image source={{uri: image}} style={{ width: 200, height: 200}} />
                <Form {...formProps} >
                  
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