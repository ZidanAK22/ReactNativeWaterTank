import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, ActivityIndicator } from 'react-native';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import BotTabNavigator from '../components/BotTabNavigator';
import MainTabNavigator from '../components/BotTabNavigator';
import { styles } from '../themes/dark';
import {useEffect, useState, useCallback} from 'react';
import auth from '@react-native-firebase/auth';
import useAuthObserver from '../hooks/AuthHook';


const Tab = createBottomTabNavigator();

interface MainScreenProps {
    navigation: any;
}
  
  const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
    // const [authenticated, setAuthenticated] = useState(!!auth().currentUser);

    // const setAuthenticatedCallback = useCallback((value: any) => {
    //   setAuthenticated(value);
    // }, []);

    // useEffect(() => {
    //   const unsubscribe = auth().onAuthStateChanged((authUser) => {
    //     setAuthenticatedCallback(!!authUser);      
    //   });    

    //   return () => unsubscribe();
    // }, [setAuthenticated]);

    // if (!authenticated) {      
    //   navigation.navigate('Login')
    // }        
    return (
      <View style={{ flex:1}}>
            <MainTabNavigator />        
      </View>
    );
  };
  
  export default MainScreen;