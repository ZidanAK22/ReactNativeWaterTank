import { useState } from "react";
import { View, TextInput, Alert, Pressable } from "react-native";
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import { Text } from "react-native";
import { styles } from "../themes/dark";

interface PasswordScreenProps {
    navigation: any;
}

const PasswordScreen: React.FC<PasswordScreenProps> = ({navigation}) => {
    const [email, setEmail] = useState('');

    const handlePasswordReset = async () => {
        try {
        // Validate email format (you may add more validation)
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                Alert.alert('Invalid Email', 'Please enter a valid email address.');
                return;
            }

            await auth().sendPasswordResetEmail(email);
            Alert.alert('Password Reset Email Sent', 'Check your email for instructions to reset your password.');

            navigation.navigate('Login')
        } catch (error: any) {
        Alert.alert('Password Reset Failed', error.message);
        }
    };

    return (
        <View>
            <Text> Email </Text>
            <TextInput
                placeholder="Your Email Here"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{ borderBottomWidth:1 }}
            />                        
            <Pressable style={styles.button} onPress={handlePasswordReset}>
                <Text>Reset Password</Text>
            </Pressable>
        </View>
    )
}

export default PasswordScreen;