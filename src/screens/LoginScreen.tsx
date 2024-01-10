import React from 'react';
import { ScrollView, TextInput, Text, Button, Alert } from 'react-native';
import {styles} from '../themes/dark';
import Logo from '../components/Logo';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const loginError = () => {
    Alert.alert(
      'Login Error!',
      'Wrong Username / Password',
      [
        {
          text:'Ok',
          // onPress: ,
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        // onDismiss: () => Alert.alert('Dismissed'),
      },
    );
  }

  const handleLogin = () => {
    const validUsername = 'lele';
    const validPassword = 'dumbo';

    if (username === validUsername && password === validPassword) {
      navigation.navigate('Main');
    }
    else {
      loginError();
    }
  }

  return (
    <ScrollView style={styles.login}>
      <Logo url="https://vectorified.com/image/water-tank-vector-34.png" />
      <Text style={styles.birubadag}> Water Tank Monitoring System</Text>
      <TextInput style={{ borderBottomWidth:1 }} placeholder="Username" value={username} onChangeText={(text) => setUsername(text)}/>
      <TextInput secureTextEntry={true} style={{ borderBottomWidth:1 }} placeholder="Password" value={password} onChangeText={(text) => setPassword(text)}/>
      <Text></Text>
      <Button onPress={handleLogin} title="Login" />      
    </ScrollView>
  );
};

export default LoginScreen;
