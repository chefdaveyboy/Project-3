import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";
import tempImage from "../../assets/images/Fergal.jpg";
import { ScrollView } from 'react-native-gesture-handler';

import { useAuth } from "../../providers/auth";
import { Login } from "../../scenes/auth/Login";
//Profile Components
import ProfileHeader from "../../components/profile components/EmployeeProfileHeader";
import EmployeeTabs from "../../components/profile components/EmployeeTabs";

const viewProfBtn = EmployeeTabs.TouchableOpacity;



export default class EmployeeProfile extends React.Component {
    



    
      render() {
          return (
              <ScrollView>
                <ProfileHeader name="Dave Koeller" role="Novice"/>
                <View style={styles.containerBottom}>
                    <EmployeeTabs navigation={this.props.navigation}/>
                    <EmployeeTabs/>
                    <EmployeeTabs/>
                    <EmployeeTabs/>
                    <EmployeeTabs/>
                    <EmployeeTabs/>
                </View>
            </ScrollView>
          )
      }
            
        
    
    }
    


const styles = StyleSheet.create({
    
    containerBottom: {
        marginTop: 20,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    header: {
        fontSize: 24,
        color: "#fff",
        paddingBottom: 10,
        marginBottom: 20,
        
    },
    appText: {
        fontSize: 18,
        color: "#8459CB",
        borderBottomColor: "#8459CB",
        borderBottomWidth: 3,
        padding: 10,


    },
    textinput: {
        
        
        textAlign: "center",
        height: 40,
        marginBottom: 30,
        color: "#fff",
        borderBottomColor: "#f8f8f8",
        borderBottomWidth: 1
        
    },
    btntext: {
        color: "#fff",
        fontWeight: "bold"
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