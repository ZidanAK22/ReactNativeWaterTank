import * as React from 'react';
import { Text, ScrollView, Pressable } from 'react-native';
import { View } from 'react-native';
import { styles } from '../themes/dark';
import ProfilePicture from '../components/ProfilePicture';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface AboutScreenProps {
    navigation: any; //actually navigation or smth else, idk
}

const AboutScreen: React.FC<AboutScreenProps> = ( {navigation} ) => {
    return (                
              <ScrollView scrollIndicatorInsets={{ top:0, left:0, bottom:0, right:0 }} contentContainerStyle={{alignItems:'center', alignContent:'center', flex:1, flexGrow:1  }}>
                <Text style={{ fontSize: 50, color: 'black' }}> Made By</Text>
                <ProfilePicture url='https://i.imgur.com/x5KeC5s.png'/>                   
                <Text style={{ fontSize:30, color:'black', fontStyle:'italic' }}> Zidan Azra Kramadibrata</Text>
                <Text> Code Monkey (for now..)</Text>                                                                                                                    
              </ScrollView>            
    );
};

export default AboutScreen;