import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React, { useState } from 'react';
import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, ScrollView, TextInput, Alert, Button, Platform} from 'react-native';
import {styles} from '../apptest/src/themes/dark';
import Logo from './src/components/Logo';
import CalculatorScreen from './src/screens/CalculatorScreen';
import Loginmadong from './src/screens/Loginmadong';
import HomeScreen from './src/screens/HomeScreen';
import MainScreen from './src/screens/MainScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import AboutScreen from './src/screens/AboutScreen';
import PrivacyScreen from './src/screens/PrivacyScreen';
import SplashScreen from 'react-native-splash-screen';
import AboutAppScreen from './src/screens/AboutAppScreen';
import SensorScreen from './src/screens/SensorScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import PasswordScreen from './src/screens/PasswordScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


// type RootStackParamList = {
//   Login: undefined,
//   Home: { title: String};
// };

const Stack = createNativeStackNavigator();

// const Stack = createNativeStackNavigator<RootStackParamList>();
// type Props = {
//   navigation = createNativeStackNavigator<RootStackParamList>();
// };



const App = () => {

  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();    
  }, []);

    return (    
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={user ? "Main" : "Login"} screenOptions={{ headerShown: false }}>      
            <Stack.Screen name="Login" component={Loginmadong}/>          
            <Stack.Screen name="Main" component={MainScreen}/>          
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="AboutApp" component={AboutAppScreen} />
            <Stack.Screen name="PrivacySettings" component={PrivacyScreen} />
            <Stack.Screen name="Sensor" component={SensorScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="forgotPasswordForm" component={PasswordScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  
};

export default App;