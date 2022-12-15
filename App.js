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
import HomeScreen from './src/screen/HomeScreen';
import EducationInfo from './src/screen/EducationInfo';
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
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
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

          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
