import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { createAppContainer, createSwitchNavigator} from 'react-navigation';



import useLinking from './navigation/useLinking';

//IMPORT ROUTES
import AuthStack from "./routes/auth";
import HomeStack from "./routes/home";


import AuthLoading from "./scenes/auth/AuthLoading";
import AuthProvider from "./providers/auth";

const AppStack = createSwitchNavigator(
  {
      Loading: AuthLoading,
      Auth: AuthStack,
      App: HomeStack
  },
  {initialRouteName: 'Loading'}
);

const Navigator = createAppContainer(AppStack)



export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'HelveticaNeue-Medium': require('./assets/fonts/HelveticaNeue-Medium.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AuthProvider><Navigator/></AuthProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#59CBBD',
  },
});
