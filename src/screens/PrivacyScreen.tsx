import * as React from 'react';
import { Text } from 'react-native';
import { ScrollView, View, Switch } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface PrivacyScreenProps {
    navigation: any; //actually navigation or smth else, idk
}

const PrivacyScreen: React.FC<PrivacyScreenProps> = ( {navigation} ) => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ScrollView style={{ flex:1 }}>
            <Text style={{ fontSize:30, color:'black' }}> Privacy Settings </Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <View style={{ margin:10, flex:1, flexDirection:'row', justifyContent:'space-evenly'}}>
                <Text style={{ fontSize:25 }}>
                    Cookies
                </Text>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? 'cornflowerblue' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"        
                    onValueChange={toggleSwitch}
                    value={isEnabled}        
                />
            </View>
        </ScrollView>
    );
};

export default PrivacyScreen;