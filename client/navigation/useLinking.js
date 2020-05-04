import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';
import EmployerProfile from '../profiles/employer/EmployerProfile';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          Links: 'links',
          Settings: 'settings',
          EmployerSignUp: "employersignup",
          EmployerProfile: "employerprofile"
        },
      },
    },
  });
}
