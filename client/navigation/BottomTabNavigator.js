import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

import EmployerSignup from '../profiles/employer/EmployerSignup';
import EmployerProfile from '../profiles/employer/EmployerProfile'

import EmployeeProfile from "../profiles/employee/EmployeeProfile"
import Employee2Profile from '../profiles/employee/Employee2Profile';









const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Loading';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (

    
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      
      <BottomTab.Screen
        name="Employee2Profile"
        component={Employee2Profile}
        options={{
          title: 'Employee 2 Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-paw" />,
        }}
      />
      <BottomTab.Screen
        name="EmployerSignUp"
        component={EmployerSignup}
        options={{
          title: 'Employer Sign Up',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person-add" />,
        }}
      />
      <BottomTab.Screen
        name="EmployerProfile"
        component={EmployerProfile}
        options={{
          title: 'Employer Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-people" />,
        }}
      />
      <BottomTab.Screen
        name="EmployeeProfile"
        component={EmployeeProfile}
        options={{
          title: 'Employee Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
    </BottomTab.Navigator>
    
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Employee2Profile':
      return 'Employee 2 Profile';
    case "EmployerSignUp":
      return "Employer Sign Up";
    case "EmployerProfile":
      return "Employer Profile";
    case "EmployeeProfile":
      return "Employee Profile";
    
  }
}
