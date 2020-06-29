import {Platform} from "react-native";

export let font = Platform.OS === 'ios' ? 'Times New Roman' : 'Roboto';
export let titleColor = '#363434';

//Nav Shared Styles
export let headerStyle = {backgroundColor: '#fff', borderBottomWidth:0, shadowColor: 'transparent'};
export let headerTitleStyle = {color: 'white', fontWeight: 'bold', fontSize: 17, fontFamily: font, color: '#fff'};

export const imageOptions = {allowsEditing: true, aspect: [4, 3]};