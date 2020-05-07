import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';


export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          Employee2Profile: 'employee2profile',
          Settings: 'settings',
          EmployerSignUp: "employersignup",
          EmployerProfile: "employerprofile",
          EmployeeProfile: "employeeprofile"
        },
      },
    },
  });
}
