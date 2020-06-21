import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, RefreshControl } from "react-native";
import * as api from "../../services/rating";
import { ScrollView } from 'react-native-gesture-handler';
import tempImage from "../../assets/images/default-profile.png";

// Profile Components
import ProfileHeader from "../../components/profile components/EmployeeProfileHeader";
import Skills from "../../components/profile components/SelfProfile/profileSkill";

export default function EmployerView(props) {
    let userInfo = props.route.params[0]
    const [user, setUser] = useState({});
    const [ratings, setRatings] = useState({});
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
    }, [userInfo._id]);

    async function initialize() {

        try {
            const user = userInfo._id;
            console.log(userInfo)

            if (user) {
                setUser(user)

            const ratings = await api.getAvgRatings(user)

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
            <ScrollView style={{backgroundColor: "#fff"}}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={_onRefresh}/>
            }
            >
                <ProfileHeader name={`${userInfo.firstName} ${userInfo.lastName}`} 
                                role={userInfo.jobRole} 
                                profileImage={(!userInfo.profileImage) ? tempImage : {uri: userInfo.profileImage}}/>
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
        marginBottom: 100
    },
    
    
})