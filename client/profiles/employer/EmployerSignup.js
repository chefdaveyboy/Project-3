//FUTURE DEVELOPMENT
import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, ScrollView } from "react-native";
import Form, { TYPES } from 'react-native-basic-form';
import * as api from "../../services/auth";
import {Header, ErrorText} from "../../auth-components/Shared";
import { useAuth } from "../../providers/auth";

export default function EmployerSignUp () {
    // const { getUsers, getAuthState } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [user, setUser] = useState({});
    // const [companyName, setCompanyName] = useState({});

    // useEffect(() => {
    //     initialize();
    //     console.log(companyName);
    // }, []);

    
    // async function initialize() {
    //     const user = await getAuthState();
    //     setCompanyName(user.user.company);
    // }
    

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

    // const company = [
    //     {label: companyName, value: companyName}
    // ]
    
    const fields = [
        {name: 'firstName', label:'Employee First Name', required: true},
        {name: 'lastName', label: 'Employee Last Name', required: true},
        {name: 'email', label: 'Employee Email Address', required: true},
        {name: 'jobRole', label: 'Employee Job Title or Role', required: true, type: TYPES.Dropdown, options: options},
        // {name: 'company', label: 'Company Name', required: true, type: TYPES.Dropdown, options: company}
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

    let formProps = {title: "Add Employee", fields, onSubmit, loading, style: styles.textinput, buttonStyle: styles.button };
    return (
        <ScrollView >
            <View style={styles.container}>
            <Header style={styles.header} title={"Employee Information"}/>
            <ErrorText error={error}/>
            <Form {...formProps}>
            </Form>
            </View>    
            
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
           
    },
    header: {
        fontSize: 24,
        color: "#fff",
        paddingBottom: 1,
        marginBottom: 0,
        borderBottomColor: "#199187",
        borderBottomWidth: 1,
    },
    textinput: {
        
        
    },
    button: {
        
        alignItems: "center",
        padding: 20,
        backgroundColor: "#8459CB",
        marginTop: 15,
        marginBottom: 30,
        borderRadius: 10,    
    },
    btntext: {
        color: "#fff",
        fontWeight: "bold"
    }
})