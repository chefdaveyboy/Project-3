import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity, RefreshControl } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from "../../providers/auth";
import * as api from "../../services/rating";
import tempImage from "../../assets/images/Fergal.jpg";
//Profile Components
import ProfileHeader from "../../components/profile components/ProfileHeader";
import Skills from "../../components/profile components/SelfProfile/profileSkill";
import { withNavigation } from "react-navigation";

export default function EmployeeProfile(props)  {
    
    const { handleLogout, getAuthState } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState({});
    const [ratings, setRatings] = useState({})
    const [refreshing, setRefresh]  = React.useState(false);


    const _onRefresh = React.useCallback(() => {
        setRefresh(true);

        initialize().then(() => 
        setRefresh(false)
        );
    }, [refreshing]);

    useEffect(() => {
        initialize()
        return function cleanup() {
            setRefresh(false);
        }
    }, []);

    async function initialize() {

        try {
            const user = await getAuthState()

            if (user) {
                setUser(user)

                let userId = user.user._id

            const ratings = await api.getAvgRatings(userId)

                if(ratings) {
                    setRatings(ratings)

                } else {
                    setRatings({})
                }
          

            } else {
                initialize()
            }
        } catch (error) {
            console.log(error)
        }
    };
    
      return (
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={_onRefresh}/>
                }
            >
                <ProfileHeader image={user.user ? `${user.user.profileImage}` : tempImage} name={user.user ? `${user.user.firstName}  ${user.user.lastName}` : "firstname lastname"} role={user.user ? user.user.jobRole : "role"} myUserId={user.user ? user.user._id : "id"}/>
                <View style={styles.containerBottom}>
                    {ratings[0] ? ratings.map(rating => 
                    <Skills number={rating.total} rating={rating.avgRat} skill={rating.skill} key={rating.skill} keyName={rating.skill}/>)
                    : <Text>No ratings available yet.</Text>
                    }
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