//FUTURE DEVELOPMENT
import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, TextInput, Text, View, TouchableOpacity } from "react-native";
import Form, { TYPES } from 'react-native-basic-form';
import { useAuth } from "../../providers/auth";
import * as api from "../../services/auth";
import {Header, ErrorText} from "../../auth-components/Shared";
import { UserInterfaceIdiom } from 'expo-constants';


export default function EmployerSignUp (props) {
   
    const { navigation } = props;
    const { getUsers, getAuthState } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({})

    useEffect(() => {
        initialize()
    }, []);
   
    async function initialize() {

                try {
                    const user = await getAuthState()
        
                    if (user) {
                        setUser(user.user)
                    }
                } catch (error) {
                    console.log(error)
                }
                        
};
    const options = [
        {label: "Front End Developer", value:"Front End Developer"},
        {label: "Back End Developer", value:"Back End Developer"},
        {label: "Full Stack Developer", value: "Full Stack Developer"},
        {label: "Database Manager", value: "Database Manager"},
        {label: "Software Engineer", value: "Software Engineer"},
        {label: "Product Manager", value: "Product Manager"},
        {label: "Web Developer", value: "Web Developer"},
        {label: ".NET Developer", value: ".NET Developer"},
        {label: "Java Developer", value: "Java Developer"},
        {label: "Quality Assurance Engineer", value: "Quality Assurance Engineer"},
        {label: "Software Developer", value: "Software Developer"},
        {label: "Systems Architect", value: "Systems Architect"},
        {label: "Application Developer", value: "Application Developer"},
        {label: "Developer", value: "Developer"},
        {label: "Hiring Manager", value: "Hiring Manager"},
        {label: "Recruiter", value: "Recruiter"},
        {label: "other", value: "other"}


    ]

    const initialData = {
        "company": "No company Available"
    }

    const fields = [
        {name: 'firstName', label:'Employee First Name', required: true},
        {name: 'lastName', label: 'Employee Last Name', required: true},
        {name: 'email', label: 'Employee Email Address', required: true},
        {name: 'jobRole', label: 'Employee Job Title or Role', required: true, type: TYPES.Dropdown, options: options},
        {name: 'company', label: 'Company', required: true}
    ];

    async function onSubmit(state) {
        setLoading(true);

        try {

            let response = await api.registerEmployee(state);
            setLoading(false);
            Alert.alert(
                'Employee will receive email shortly',
                response.message,
                [{text: 'OK', onPress: () => navigation.replace("Login")}],
                {cancelable: false},
            );

        } catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }

    let formProps = {title: "Add Employee", fields, onSubmit, loading, style: styles.textinput, buttonStyle: styles.button, initialData};
    return (
        <View style={styles.container}>
            <Header style={styles.header} title={"Employee Information"}/>
            <View style={styles.container}>
                <ErrorText error={error}/>
                <Form {...formProps}>
                </Form>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8459CB",
        justifyContent: "center",
        alignItems: "center",
           
    },
    header: {
        fontSize: 24,
        color: "#fff",
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: "#199187",
        borderBottomWidth: 1,
    },
    textinput: {
        
        
        textAlign: "center",
        height: 40,
        marginBottom: 30,
        color: "#fff",
        borderBottomColor: "#f8f8f8",
        borderBottomWidth: 1
        
    },
    button: {
        
        alignItems: "center",
        padding: 20,
        backgroundColor: "#59cbbd",
        marginTop: 30,
        borderRadius: 10,    
    },
    btntext: {
        color: "#fff",
        fontWeight: "bold"
    }
})