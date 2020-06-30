import React from "react";
import { StyleSheet, Text, View, } from "react-native";

import SkillsJson from "../../skills.json";


//Profile Components

import Skills from "../SelfProfile/profileSkill";


export default class Employee2Profile extends React.Component {
    
    state = {
        SkillsJson
    }

    render() {
      return (
                
                <View style={styles.containerBottom}>
                    <Text style={styles.skillset}>{this.state.SkillsJson[0].skillset}</Text>
                    {this.state.SkillsJson[0].skills.map(data => (
                        
                        <Skills 
                        key={data.name}
                        skill={data.name}
                        />
                    ))}
                    <Text style={styles.skillset}>{this.state.SkillsJson[1].skillset}</Text>
                    {this.state.SkillsJson[1].skills.map(data => (
                        
                        <Skills 
                        key={data.name}
                        skill={data.name}
                        />
                    ))}
                    <Text style={styles.skillset}>{this.state.SkillsJson[2].skillset}</Text>
                    {this.state.SkillsJson[2].skills.map(data => (
                        
                        <Skills 
                        key={data.name}
                        skill={data.name}
                        />
                    ))}
                    <Text style={styles.skillset}>{this.state.SkillsJson[3].skillset}</Text>
                    {this.state.SkillsJson[3].skills.map(data => (
                        
                        <Skills 
                        key={data.name}
                        skill={data.name}
                        />
                    ))}
                    
                        
                    
                </View>
           )
        
      
    }
    
}

const styles = StyleSheet.create({
    
    containerBottom: {
        paddingTop: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        
    },
   skillset: {
       fontWeight: "bold",
       marginTop: 15,
       fontSize: 25,
       marginBottom: 10,
       color: "#59cbbd"
   }
    
    

}); 