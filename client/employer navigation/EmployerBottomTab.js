//NOT THE PROBLEM
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';


import EmployerProfile from "../profiles/employer/EmployerProfile"
import AddEmployees from '../profiles/employer/EmployerSignup';
import EmployerView from "../profiles/employer/EmployerView";
import { useLinkProps } from '@react-navigation/native';
import { BottomTabBar } from "@react-navigation/bottom-tabs";



const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Loading';



export default function EmployerBottomTab({ navigation, route }) {
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
        component={EmployerProfile}
        options={{
          title: 'My Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
      
      <BottomTab.Screen
        name="AddEmployees"
        component={AddEmployees}
        options={{
          title: 'Invite Employees',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-add" />,
        }}
      />
      
      {/* Hidden */}
      {/* <BottomTab.Screen
        name="EmployeeProfile"
        component={EmployerView}
        /> */}
        
      
      
      
    </BottomTab.Navigator>
    
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "MyProfile":
      return "My Profile";
    case 'AddEmployees':
      return 'Invite Employees';
    
    
    
  }
}