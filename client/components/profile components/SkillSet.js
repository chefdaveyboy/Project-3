import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from "react-native";
import DropdownMenu from "react-native-dropdown-menu";

import SkillsJson from "../skills.json";
//Profile Components

import SkillsContainer from "./skillsContainer";



export default class Employee2Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "Front End",
            SkillsJson
        }
    }

    getIndexValue = () => {
    let skill = this.state.text;
    
    switch (skill) {
        case "Front End":
            return 0;
        case "Back End":
            return 1;
        case "JavaScript Libraries":
            return 2;
        case "Soft Skills":
            return 3;

    }   
}
    render() {
        const data = [];
        const start =[];
        for (let i=0; i<SkillsJson.length; i++) {
            let skills = SkillsJson[i].skillset;
            start.push(skills);
            
        }
        data.push(start);

        let indexValue = this.getIndexValue();
        console.log(this.state.text);
        console.log(indexValue);
      return (

            <View style={{flex: 1}}>
                <DropdownMenu
                    style={{flex: 1}}
                    bgColor={"white"}
                    tintColor={"#666666"}
                    activityTintColor={"green"}
                    handler={(selection, row) => this.setState({text: data[selection][row]})}
                    data={data}
                    
                    >
                    <View style={{flex: 1}}>
                        <SkillsContainer skillsdata={indexValue} />
                     
                    </View>
                    
                </DropdownMenu>
            </View>
                
           
        
    )  
    }

    
}




const styles = StyleSheet.create({
    
    
   
    
    

}); 