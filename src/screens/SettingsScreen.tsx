import * as React from 'react';
import { Text } from 'react-native';
import { ScrollView, View, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface SettingsScreenProps {
    navigation: any; //actually navigation or smth else, idk
}

const SettingsScreen: React.FC<SettingsScreenProps> = ( {navigation} ) => {
    return (
        <ScrollView style={{ flex:1 }}>
            <Text style={{ fontSize:30, color:'black' }}> Settings </Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <View style={{ margin:10, flex:1, flexDirection:'column', justifyContent:'space-evenly'}}>
                <Pressable onPress={() => navigation.navigate('AboutApp')}>          
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:300, margin:5}}>
                    <Text style={{ fontSize:18 }}> About the App </Text>
                    <MaterialCommunityIcons name='arrow-right-circle' size={25}/>
                </View>            
                </Pressable>                    
                <Pressable onPress={() => navigation.navigate('About')}>          
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:300, margin:5}}>
                    <Text style={{ fontSize:18 }}> About the Dev </Text>
                    <MaterialCommunityIcons name='arrow-right-circle' size={25}/>
                </View>            
                </Pressable>                 
                <Pressable onPress={() => navigation.navigate('Sensor')}>          
                <View style={{ flexDirection:'row', justifyContent:'space-between', width:300, margin:5}}>
                    <Text style={{ fontSize:18 }}> Sensors </Text>
                    <MaterialCommunityIcons name='arrow-right-circle' size={25}/>
                </View>            
                </Pressable>  
            </View>
        </ScrollView>
    );
};

export default SettingsScreen;