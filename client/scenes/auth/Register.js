import React, { useState } from 'react';
import {Alert, View} from 'react-native';
import * as api from "../../services/auth";
import Form, { TYPES } from 'react-native-basic-form';
import CTA from "../../auth-components/CTA";
import {Header, ErrorText} from "../../auth-components/Shared";

export default function Register(props) {
    const {navigation} = props;

    //1 - DECLARE VARIABLES
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

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

    const optionsEmployer = [
        {label: "Yes", value: true },
        {label: "No", value: false }
    ]

    const fields = [
        {name: 'username', label:'Username', required: true},
        {name: 'firstName', label: 'First Name', required: true},
        {name: 'lastName', label: 'Last Name', required: true},
        {name: 'email', label: 'Email Address', required: true},
        {name: 'password', label: 'Password', required: true, secure:true},
        {name: 'jobRole', label: 'Job Title or Role', required: true, type: TYPES.Dropdown, options: options},
        {name: 'company', label: 'Company', required: true},
        {name: 'employer', label: 'Are you an employer?', type: TYPES.Dropdown, options: optionsEmployer},
    ];

    

    async function onSubmit(state) {
        setLoading(true);

        try {
            let response = await api.register(state);
            setLoading(false);
            Alert.alert(
                'Registration Successful',
                response.message,
                [{text: 'OK', onPress: () => navigation.replace("Login")}],
                {cancelable: false},
            );
        } catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }

    let formProps = {title: "Register", fields, onSubmit, loading };
    return (
        <View style={{flex: 1, paddingHorizontal: 16, backgroundColor:"#fff"}}>
            <Header title={"Register"}/>
            <View style={{flex:1}}>
                <ErrorText error={error}/>
                <Form {...formProps}>
                    <CTA
                        title={"Already have an account?"}
                        ctaText={"Login"}
                        onPress={() => navigation.replace("Login")}
                        style={{marginTop: 50}}/>
                </Form>
            </View>
        </View>
    );
};

Register.navigationOptions = ({}) => {
    return {
        title: ``
    }
};