import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";
import tempImage from "../../assets/images/Fergal.jpg";
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from "../../providers/auth";
import * as api from "../../services/auth";

//Profile Components

import EmployeeTabs from "../../components/profile components/EmployeeTabs";

export default function Colleagues(props) {
    
    const { getUsers } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState({});

    useEffect(() => {
        initialize()
    }, []);

    async function initialize() {
        try {
            const users = await api.getUsers()

            if (users) {
                console.log(users.users[0])
                setUsers(users.users)
            } else {
                initialize()
            }
        } catch (error) {
            console.log(error)
        }
    };
          return (
              <ScrollView>
                  <View style={styles.containerBottom}>
                      {users[0] ? users.map(user => (
                    <EmployeeTabs name={user.firstName} lastName={user.lastName} role={user.jobRole} key={user._id}/>
                    )) : <Text>No colleages available</Text> }
                </View>
            </ScrollView>
          )
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