import * as React from 'react';
import { styles } from '../themes/dark';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TemplateButton from '../components/Buttone';
import { TextInput, View, Button, Pressable } from 'react-native';
import { Float, Int32 } from 'react-native/Libraries/Types/CodegenTypes';


const CalculatorScreen = ({navigation}: {navigation: any}) => {
    const [in1, setIn1] = React.useState('');
    const [in2, setIn2] = React.useState('');
    const [sum, setSum] = React.useState('');

    const jumlah = () => {
        const n1 = parseFloat(in1);
        const n2 = parseFloat(in2);

        setSum((n1 + n2).toString());
    }

    const kurang = () => {
        const n1 = parseFloat(in1);
        const n2 = parseFloat(in2);

        setSum((n1 - n2).toString());
    }

    const kali = () => {
        const n1 = parseFloat(in1);
        const n2 = parseFloat(in2);

        setSum((n1 * n2).toString());
    }

    const bagi = () => {
        const n1 = parseFloat(in1);
        const n2 = parseFloat(in2);

        setSum((n1 / n2).toString());
    }

    return(
        <View>    
            <View style={styles.operators}>
                <TextInput 
                    placeholder='Input 1' 
                    value={in1} 
                    keyboardType='numeric' 
                    onChangeText={(Text) => setIn1(Text)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Input 2' 
                    value={in2} 
                    keyboardType='numeric' 
                    onChangeText={(Text) => setIn2(Text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.operators}>
                <Pressable style={styles.roundbtn} onPress={jumlah}>
                    <Text style={styles.operator} >+</Text>
                </Pressable>
                
                <Pressable style={styles.roundbtn} onPress={kurang}>
                    <Text style={styles.operator} >-</Text>
                </Pressable>

                <Pressable style={styles.roundbtn} onPress={kali}>
                    <Text style={styles.operator} >x</Text>
                </Pressable>

                <Pressable style={styles.roundbtn} onPress={bagi}>
                    <Text style={styles.operator} >/</Text>
                </Pressable>
                
            </View>

            <Text style={{ textAlign:'center', fontSize:30, margin:25, color:'cornflowerblue' }}>Result is  {sum}</Text>

        </View>
        
    )
}


export default CalculatorScreen;