import React from "react";
import { View, TextInput, Alert, Pressable } from "react-native";
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import { Text } from "react-native";
import { styles } from "../themes/dark";

const SignUpScreen = () => {

    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [user, setUser] = React.useState<FirebaseAuthTypes.User | null>(null);
    const [error, setError] = React.useState<string | null>(null);

    const signUpWithEmailPassword = async () => {
        try {
          await auth().createUserWithEmailAndPassword(email, password);
        } catch (error: any) {
          setError(error.message);
          console.error('Error signing up with email and password:', error.message);      
        }
      };

    const handleSignup = async () => {    
        try {
            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            console.log('User signed up!', userCredential.user);
            // You can navigate to another screen or perform other actions upon successful signup
        } catch (error:any) {
            Alert.alert('Error', error.message);
        }
    };              

    return (        
        <View>
            <Text>Asep</Text>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{ borderBottomWidth:1 }}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={{ borderBottomWidth:1 }}
            />
            <Pressable onPress={handleSignup} style={styles.button}>
              <Text style={{ color:'white' }} > Sign Up Page</Text>
            </Pressable>            
        </View>            
    )
};

export default SignUpScreen;