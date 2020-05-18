import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from "../../providers/auth";
import * as api from "../../services/rating";
//Profile Components
import ProfileHeader from "../../components/profile components/EmployeeProfileHeader";
import SkillContainer from "../../components/profile components/SelfProfile/profileSkillContainer";

export default function EmployeeProfile(props)  {
    
    const { handleLogout, getAuthState } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState({});
    const [ratings, setRatings] = useState({})
   
    useEffect(() => {
        initialize()
    }, []);

    async function initialize() {

        try {
            const user = await getAuthState()

            if (user) {
                setUser(user)

                let userId = user.user._id

                await api.getAvgRatings(userId)

               console.log(response)

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
                    {user.user ? user.user.ratings.map(rating => console.log(rating)) : <Text>No skills have been rated yet</Text>}
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