import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from "../../providers/auth";
//Profile Components
import ProfileHeader from "../../components/profile components/EmployeeProfileHeader";
import EmployeeTabs from "../../components/profile components/EmployeeTabs";

const viewProfBtn = EmployeeTabs.TouchableOpacity;

export default function EmployeeProfile(props)  {
    const {navigate} = props.navigation;
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
            setUser(user)
        } catch (error) {
            setError(error)
        }
    };

      return (
            <ScrollView>
                <ProfileHeader name={`${user.user.firstName} ${user.user.lastName}`} role={user.user.jobRole}/>
                <View style={styles.containerMiddle}>
                    <TouchableOpacity style={styles.button1} >
                        <Text style={styles.btntext}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={() => {
                        handleLogout();
                        navigate('Auth');
                    }}>
                        <Text style={styles.btntext}>Log Out</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerBottom}>
                    <EmployeeTabs onPress={() => this.navigation.navigate("Employee2Profile")}/>
                    <EmployeeTabs/>
                    <EmployeeTabs/>
                    <EmployeeTabs/>
                    <EmployeeTabs/>
                    <EmployeeTabs/>
                </View>
            </ScrollView>
        
    )  
    }
    


const styles = StyleSheet.create({
    containerMiddle: {
        
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    containerBottom: {
        
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
    button1: {
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#59cbbd",
        borderRadius: 10,
        margin: 20
        
    },
    button2: {
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#A0CB59",
        borderRadius: 10,
        margin: 20
        
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