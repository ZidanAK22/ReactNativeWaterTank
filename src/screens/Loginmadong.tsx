import React, {useEffect} from 'react';
import { ScrollView, TextInput, Text, Button, Alert, View, Pressable } from 'react-native';
import {styles} from '../themes/dark';
import Logo from '../components/Logo';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import { Image, color } from '@rneui/base';


interface LoginScreenProps {
  navigation: any;
}

const Loginmadong: React.FC<LoginScreenProps> = ({ navigation }) => {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [user, setUser] = React.useState<FirebaseAuthTypes.User | null>(null);
    const [error, setError] = React.useState<string | null>(null);

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
  
    const signInWithEmailPassword = async () => {
      try {
        if (!email || !password) {
          Alert.alert('Invalid Input', 'Please enter both email and password.');
          return;
        }

        await auth().signInWithEmailAndPassword(email, password);

        const currentUser:FirebaseAuthTypes.User | null = auth().currentUser;

        setUser(currentUser);

        navigation.navigate('Main');
      } catch (error: any) {
        setError(error.message);
        console.error('Error signing in with email and password:', error.message);        
        loginError();
      }
    };      
  
    const signUpForm = async () => {
      navigation.navigate('SignUp');
    }

    const forgotPasswordForm = async () => {
      navigation.navigate('forgotPasswordForm');
    }
  
    return (
      <View style={styles.login}>
        <Logo url="https://vectorified.com/image/water-tank-vector-34.png" />
        <Text style={styles.birubadag}> Water Tank Monitoring System</Text>               
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{ borderBottomWidth:1, color:'black' }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{ borderBottomWidth:1, color:'black' }}
        />      
        <View style={{ flex:1, flexDirection:'column' }}>
          <Pressable onPress={signInWithEmailPassword} style={styles.button}>
            <Text>Sign in</Text>
          </Pressable>              

          <Pressable onPress={signUpForm} style={styles.button}>
            <Text> Sign Up Page</Text>
          </Pressable>            
        </View>  
        
        {error && <Text style={{ color: 'red' }}>{error}</Text>}          

        <Pressable style={{ alignItems:'center' }} onPress={forgotPasswordForm}>
          <Text style={{ color:'black' }}>Forgot Password?</Text>
        </Pressable>
      </View>
    );
};

export default Loginmadong;
