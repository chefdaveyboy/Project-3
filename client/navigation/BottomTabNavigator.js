//NOT THE PROBLEM
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';


import EmployeeProfile from "../profiles/employee/EmployeeProfile"
import Colleagues from '../profiles/employee/Colleagues';

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
        name="EmployeeProfile"
        component={EmployeeProfile}
        options={{
          title: 'Employee Profile',
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
