import * as React from 'react';
import {Provider} from 'react-redux';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screen/SplashScreen';
import Login from './src/screen/Login';
import SignUp from './src/screen/SignUp';
import SignIn from './src/screen/SignIn';
import PersonalInfo from './src/screen/PersonalInfo';
import EducationInfo from './src/screen/EducationInfo';
import Skill from './src/screen/Skill';
import FirstJob from './src/screen/FirstJob';
import BioData from './src/screen/BioData';
import Achievement from './src/screen/Achievement';
import Preview from './src/screen/Preview';
import HomeScreen from './src/screen/HomeScreen';
import {store} from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
        

          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PersonalInfo"
            component={PersonalInfo}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="EducationInfo"
            component={EducationInfo}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Skill"
            component={Skill}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="FirstJob"
            component={FirstJob}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="BioData"
            component={BioData}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Achievement"
            component={Achievement}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Preview"
            component={Preview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
