import React, { useState, useEffect } from 'react';
import {View, Image, Button, Text} from 'react-native';
import * as api from "../../services/auth";
import { useAuth } from "../../providers/auth";
import Form, {TYPES} from 'react-native-basic-form';
import {ErrorText} from "../../auth-components/Shared";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from "expo-constants";

export default class UpdateProfile extends React.Component {

  state = {
    image: null,
  }

  render() {
    let { image } = this.state;
    
    
    
   
    



    return (
      <View style={{flex: 1, paddingHorizontal: 16, backgroundColor:"#fff"}}>
            <View style={{flex:1}}>
              <Text>THIS DOES NOT WORK!!!</Text>
                <Button title="image" onPress={this._pickImage}/>                
                {image && <Image source={{uri: image}} style={{ width: 200, height: 200}}/> }
                

                
                 
                  
            </View>
        </View>
    )
  };

  componentDidMount() {
    this.getPermissionsAsync();
  };

  getPermissionsAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

_pickImage = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
                this.setState({image: result.uri})
                console.log(image);
                
            }
    
        } catch (E) {
          console.log(E);
        }
      };
  

}



    
      



UpdateProfile.navigationOptions = ({}) => {
    return {
        title: `Update Profile`
    }
};