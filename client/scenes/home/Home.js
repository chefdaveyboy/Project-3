// import React, { useState, useContext } from 'react';
// import { Text, View, Button, ActivityIndicator, Alert, StyleSheet } from 'react-native';

// import { useAuth } from "../../providers/auth";

// export default function Home(props) {
//     const {navigate} = props.navigation;

//     const {state, handleLogout} = useAuth();
//     const user = state.user;

//     return (
//         <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
//             <Text style={styles.welcome} >{`Welcome ${user.firstName} ${user.lastName} (${user.username})`}</Text>

//             <Button style={styles.button} title={"View Profile"} onPress={() => navigate('UpdateProfile')}/>

//             <Button style={styles.button} title={"Log Out"} onPress={() => {
//                 handleLogout();
//                 navigate('Auth');
//             }}/>
//         </View>
//     );
// }

// const styles = StyleSheet.create({

//     welcome: {
//         fontSize: 20,
//         marginBottom: 20,

//     },
//     button: {
//         marginBottom: 50
//     }



// })