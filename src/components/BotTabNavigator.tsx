import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HomeScreen2 from '../screens/HomeScreen2';
import CalculatorScreen from '../screens/CalculatorScreen';
import BmiScreen from '../screens/BmiScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CardScreen from '../screens/CardScreen';
import CrudScreen from '../screens/CrudScreen';

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const MainTabNavigator = () => {
  return (
    // Javascript style. Error is from TypeScript. 
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused
            ? 'home'            
            : 'home-outline';
          } else if (route.name === 'Card Screen') {
            iconName = focused ? 'note-text' : 'note-text-outline';
          } else if (route.name === 'Song List') {
            iconName = focused ? 'music-circle' : 'music-circle-outline';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'head' : 'head-outline';
          }
          return <MaterialCommunityIcons name={iconName} color={color} size={size}/>;

        },
        tabBarActiveTintColor: 'cornflowerblue',              
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
      />
      <Tab.Screen 
        name="Card Screen" 
        component={CardScreen} 
      />
      <Tab.Screen 
      name="Song List" 
      component={CrudScreen}     
      
      />
      <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      />      
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
