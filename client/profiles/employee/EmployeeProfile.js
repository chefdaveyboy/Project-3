import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from "../../providers/auth";
//Profile Components
import ProfileHeader from "../../components/profile components/EmployeeProfileHeader";
import SkillContainer from "../../components/profile components/SelfProfile/profileSkillContainer";



export default function EmployeeProfile(props)  {
    
    const { handleLogout, getAuthState } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState({});
   
    useEffect(() => {
        initialize()
    }, []);

    async function initialize() {
        try {
            const user = await getAuthState()

            if (user) {
                setUser(user)
            } else {
                initialize()
            }
        } catch (error) {
            console.log(error)
        }
    };
    
      return (
            <ScrollView>
                <ProfileHeader name={user.user ? `${user.user.firstName}  ${user.user.lastName}` : "firstname lastname"} role={user.user ? user.user.jobRole : "role"}/>
                <View style={styles.containerBottom}>
                    <SkillContainer/>
                </View>
            </ScrollView>
          )
      }
            
        
    
    
    


const styles = StyleSheet.create({
    
    containerBottom: {
        
        backgroundColor: "#fff",
        alignItems: "center",
        marginBottom: 325
    },
    
})