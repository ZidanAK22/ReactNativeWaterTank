import * as React from 'react';
import { Text, ScrollView, Pressable } from 'react-native';
import { View } from 'react-native';
import { styles } from '../themes/dark';
import ProfilePicture from '../components/ProfilePicture';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface AboutAppScreenProps {
    navigation: any; //actually navigation or smth else, idk
}

const AboutAppScreen: React.FC<AboutAppScreenProps> = ( {navigation} ) => {
    return (
        
            <View style={{ flex:1, flexGrow:1, justifyContent:'space-between',backgroundColor:'cornflowerblue', alignItems:'center' }}>                      
                                
                    <ProfilePicture url='https://vectorified.com/image/water-tank-vector-34.png'/>                                 
                    <Text style={{ fontSize: 25, color: 'black', textAlign:'center' }}> Water Tank Monitoring System</Text>
                    <Text></Text>
                    <Text>In Progress...</Text>                

                    <View style={{ flex:1, justifyContent:'flex-end' }}>
                        <Text> Made through tears, sweat, and sweat.</Text>
                        
                        <View style={{flexDirection:'row', justifyContent:'center' }}>                    
                            <MaterialCommunityIcons name='react' size={40}/>
                            <MaterialCommunityIcons name='language-typescript' size={40}/>
                            <MaterialCommunityIcons name='language-javascript'size={40}/>
                        </View>                
                    </View>                                
                                  
            </View>
    );
};

export default AboutAppScreen;