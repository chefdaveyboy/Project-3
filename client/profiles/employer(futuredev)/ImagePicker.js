import React from "react";
import {Button, View, Image, Constants} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default class ImageSelector extends React.Component {

    state = {
        image: null
    };

    render() {
        let { image } = this.state;

        return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Button title="Select Image from Camera Roll" onPress={this._pickImage} />
                {image && (<Image source={{ uri: image.uri }} style={{ width: 200, height: 200}} />)}
            </View>
        );
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
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
            this.setState(
              { image: result.uri });
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
        }
      };
    }