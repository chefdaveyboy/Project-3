import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';


import EmployeeProfile from "../profiles/employee/EmployeeProfile"
import Colleagues from '../profiles/employee/Colleagues';
import Employee2Profile from "../profiles/employee/Employee2Profile";
import { BottomTabBar } from "@react-navigation/bottom-tabs";



const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Loading';



export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (

    
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
    //This hides the 3rd bottom tab screen as a work around to nested stack nav
    tabBar={props => <BottomTabBar {...props} state={{...props.state, routes: props.state.routes.slice(0,2)}}></BottomTabBar>}
    >
      
      <BottomTab.Screen
        name="MyProfile"
        component={EmployeeProfile}
        options={{
          title: 'My Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
      
      <BottomTab.Screen
        name="Colleagues"
        component={Colleagues}
        options={{
          title: 'People I Work With',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-people" />,
        }}
      />
      
      {/* Hidden */}
      <BottomTab.Screen
        name="EmployeeProfile"
        component={Employee2Profile}
        />
        
      
      
      
    </BottomTab.Navigator>
    
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "EmployeeProfile":
      return "Employee Profile";
    case 'Colleagues':
      return 'People I Work With';
    
    
    
  }
}
