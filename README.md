
 
# Welcome to Level Up Coding!

Level Up Coding is a a Full Stack Javascript Developer rating application. 
Register for an account to begin submitting ratings for folks you know, and watch your own stats grow. Utilize our easy star rating system and enjoy our clean UI!


(Original design  plan was to be a general developer rating application, with an Employer component, allowing employees to sign up for accounts, and developers only being able to see those they work with. We have moved this piece of our plan to future development.)

--------------------------------------

Level Up Coding Screens: 

![Images from Level Up Coding](./client/assets/images/ReadMeImages/combined.png)

--------------------------------------
This applictation was built using Expo and React Native, and tested and developed with Android Studio emulators. 

[What is Expo?](https://docs.expo.io/)
[What is React Native?](https://reactnative.dev/)
[What is Android Studio?](https://developer.android.com/studio/intro)

(^^^Install all of these before getting started!)

Our app utilizes the following [NPM Packages](https://www.npmjs.com/)/dependencies:

  "dependencies": {
    "@expo/vector-icons": "~10.0.6",
    "@react-native-community/masked-view": "0.1.6",
    "@react-navigation/bottom-tabs": "^5.0.0",
    "@react-navigation/native": "^5.0.0",
    "@react-navigation/stack": "^5.0.0",
    "@react-navigation/web": "~1.0.0-alpha.9",
    "axios": "^0.19.2",
    "cloudinary-react": "^1.5.0",
    "expo": "~37.0.3",
    "expo-asset": "~8.1.3",
    "expo-barcode-scanner": "^8.1.0",
    "expo-camera": "^8.2.0",
    "expo-constants": "~9.0.0",
    "expo-font": "~8.1.0",
    "expo-image-picker": "^8.1.0",
    "expo-media-library": "^8.1.0",
    "expo-permissions": "^8.1.0",
    "expo-web-browser": "~8.1.0",
    "moment": "^2.25.3",
    "mongoose": "^5.9.14",
    "react": "~16.9.0",
    "react-dom": "~16.9.0",
    "react-native": "https://github.com/expo/react-native/archive/sdk-37.0.1.tar.gz",
    "react-native-basic-form": "^1.1.6",
    "react-native-dropdown-menu": "^2.0.0",
    "react-native-gesture-handler": "~1.6.0",
    "react-native-image-picker": "^2.3.1",
    "react-native-safe-area-context": "0.7.3",
    "react-native-screens": "~2.2.0",
    "react-native-star-rating": "^1.1.0",
    "react-native-web": "~0.11.7",
    "react-navigation": "^4.3.9",
    "react-navigation-stack": "^2.4.0"
  },

We reccomend a good grasp of react and some reserach into react-native, JSX, and Expo before cloning our package! We also reccomend knowledge of NPM and using these packages! You would also need to have all of the proper technologies installed. 

Our server side code can be found at https://github.com/r-andrew-dev/authentication-api-luc

Our server side code uses the following [NPM Packages](https://www.npmjs.com/)/dependencies:

  "dependencies": {
    "@sendgrid/mail": "^7.1.0",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "cloudinary": "^1.21.0",
    "cors": "^2.8.5",
    "datauri": "^3.0.0",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-validator": "^6.4.1",
    "jade": "^1.11.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.9.12",
    "multer": "^1.4.2",
    "node-gyp": "^6.1.0",
    "passport": "^0.4.1",
    "passport-jwt": "^4.0.0"
  },

  Our database is buit using mongodb. 

------------------------------------------

Huge Shoutout!!! to @MosesEsan for this tutorial on creating an authentication API: 

https://medium.com/swlh/how-to-build-a-node-js-authentication-api-with-email-verification-image-upload-and-password-reset-95e35fd46be1

AND for this tutorial on integrating that API with React Native: 

https://medium.com/better-programming/how-to-add-authentication-to-your-react-native-app-with-react-hooks-and-react-context-api-46f57aedbbd

