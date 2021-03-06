import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, RefreshControl } from "react-native";
import tempImage from "../../assets/images/default-profile.png"
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from "../../providers/auth";
import * as api from "../../services/auth";
import Constants from 'expo-constants';

export default function Colleagues(props) {
   
    const { navigation } = props;
    const {getAuthState } = useAuth();
    const [user, setUser] = useState({});
    const [users, setUsers] = useState({});
    const [refreshing, setRefresh]  = React.useState(false);

    const _onRefresh = React.useCallback(() => {
        setRefresh(true);

        initialize().then(() => 
        setRefresh(false)
        );
    }, [refreshing]);

    useEffect(() => {
        initialize();
        return function cleanup() {
            setRefresh(false);
        }
    }, []);
   
    async function initialize() {
        try {
            const user = await getAuthState()
            
            if (user) {
                let company = user.user.company

                setUser(user)
                const companyUsers = await api.getCompanyUsers(company)
                if (companyUsers[0] && user.user) {
                let id = user.user._id
                shownUsers = companyUsers.filter(elem => elem._id !== id)
                setUsers(shownUsers)
                } else {
                    setUsers({})
                }
            }
            else {
                initialize()
            }
            } catch (error) {
                console.log(error)
            }
                    
};
    onsubmit = (id) => {

        let profile = users.filter(elem => elem._id == id)
        navigation.navigate("EmployeeProfile", profile )

    }
          return (
              <ScrollView style={{flex: 2, backgroundColor: '#fff'}}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={_onRefresh}/>
                }
              >
                  <View style={styles.containerBottom}>
                      {users[0] ? users.map(user => (
                          <View key={user._id} style={styles.colleagueContainer} >
                          
                          <Image
                          source={user.profileImage ? {uri: user.profileImage} : tempImage}
                          style={styles.images}
                          />
                          <View style={styles.containerInner}>
                              <Text style={styles.text}>{user.firstName} {user.lastName}</Text>
                              <Text style={styles.textSecond}>Role: {user.jobRole}</Text>
                          </View>
                          <TouchableOpacity userId={user._id} style={styles.ratings} onPress={() => onsubmit(user._id)}>
                              <Text style={styles.btntxt}>Rate</Text>
                          </TouchableOpacity>
                          </View>
                    )) : <Text>No colleages available</Text> }
                </View>
            </ScrollView>
          )
      }
    
    


const styles = StyleSheet.create({
    
    containerBottom: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
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

    },
    colleagueContainer: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignContent: "stretch",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#BBBBBB",
        borderRadius: 10,
        marginBottom: 15,
        
           
    },
    containerInner: {
        flex: 3,
        flexDirection: "column",
        justifyContent: "center",

    },
    text: {
        fontSize: 20,
        color: "#8459CB",
        margin: 10,
        marginBottom: 2
        
    },
    textSecond: {
       fontSize: 12,
       fontWeight: "bold",
       color: "#59cbbd",
       margin: 10,
       marginTop: 2
    },
    images: {
        flex: 1,
        margin: 10,
        marginTop: 15,
        width: 50,
        height: 50,
        borderRadius: 5,  

    },
    ratings: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        padding: 5,
        backgroundColor: "#CB5967",
        borderRadius: 10,
        margin: 10
    },
    btntxt: {
        color: "#fff"
    }
})