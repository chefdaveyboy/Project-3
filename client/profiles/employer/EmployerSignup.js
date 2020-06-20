//FUTURE DEVELOPMENT
import React, { useState, useEffect, useReducer } from "react";
import { Alert, StyleSheet, View, ScrollView } from "react-native";
import Form, { TYPES } from 'react-native-basic-form';
import { useAuth } from "../../providers/auth";
import * as api from "../../services/auth";
import {Header, ErrorText} from "../../auth-components/Shared";

export default function EmployerSignUp (props) {
   
    const { navigation } = props;
    const { getUsers, getAuthState } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({})

    useEffect(() => {
        initialize()
    }, []);
   
    async function initialize(state) {

                state = initialState;
                console.log(state, "HERE IS STATE")

                try {
                    const user = await getAuthState()
        
                    if (user) {
                        setUser(user.user)
                        console.log(user)
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

    const companyOptions = [
        {label: `${user ? user.company : "No company available"}`, value: `${user ? user.company : "No company available"}`},
    ]

    const fields = [
        {name: 'firstName', label:'Employee First Name', required: true},
        {name: 'lastName', label: 'Employee Last Name', required: true},
        {name: 'email', label: 'Employee Email Address', required: true},
        {name: 'jobRole', label: 'Employee Job Title or Role', required: true, type: TYPES.Dropdown, options: options},
        {name: 'company', label: 'Company', required: true, type: TYPES.Dropdown, options: companyOptions}
    ];

    async function onSubmit(state) {
        setLoading(true);

        try {

            let response = await api.registerEmployee(state);
            setLoading(false);
            Alert.alert(
                'Employee will receive email shortly',
                response.message,
                [{text: 'OK', onPress: () => {
                    navigation.goBack(),
                    state = initialState
                    console.log(state)}
                }],
                {cancelable: false},
            );

        } catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }

    let formProps = {title: "Add Employee", fields, onSubmit, loading, style: styles.textinput, buttonStyle: styles.button};
    return (
        <ScrollView >
            <View style={styles.container}>
            <Header style={styles.header} title={"Employee Information"}/>
            <Form {...formProps}>
            </Form>
            <ErrorText error={error}/>
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
        borderRadius: 10,    
    },
    btntext: {
        color: "#fff",
        fontWeight: "bold"
    }
})