import * as React from 'react';
import { styles } from '../themes/dark';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TemplateButton from '../components/Buttone';
import { TextInput, View, Button, Pressable } from 'react-native';
import { Float, Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import SelectDropdown from 'react-native-select-dropdown';
import Logo from '../components/Logo';

const BmiScreen = ({navigation}: {navigation: any}) => {
    const genders = ["Male", "Female"]
    const [height, setHeight] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [selectedGender, setSelectedGender] = React.useState(null);
    const [bmi, setBmi] = React.useState< number >(0);
    const [bmiCategory, setBmiCategory] = React.useState< string >('');

    const handleSelect = (selectedItem: React.SetStateAction<null>, index: any) => {
        setSelectedGender(selectedItem);
        console.log(selectedItem, index);
      };

    const BMICalc = () => {
        const parsedHeight = parseFloat(height)/100;
        const parsedWeight = parseFloat(weight);
            

        if (!isNaN(parsedHeight) && !isNaN(parsedHeight)) {
            const bmi = parsedWeight / (parsedHeight * parsedHeight);
            if (selectedGender === "Male") {
                setBmi((bmi * 1.1));
            }
            if (selectedGender === "Female") {
                setBmi((bmi * 1.1));
            }
        }
        
        if (bmi < 18.5) {
            setBmiCategory('Underweight');
          } else if (bmi >= 18.5 && bmi < 24.9) {
            setBmiCategory('Normal weight');
          } else if (bmi >= 25 && bmi < 29.9) {
            setBmiCategory('Overweight');
          } else {
            setBmiCategory('Obese');
          }        
    }
    
    return(
        <View style={styles.bmi}>    
            <View style={styles.operators}>
                <TextInput 
                    placeholder='Tinggi Badan (cm)' 
                    value={height} 
                    keyboardType='numeric' 
                    onChangeText={(Text) => setHeight(Text)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Berat Badan (kg)' 
                    value={weight} 
                    keyboardType='numeric' 
                    onChangeText={(Text) => setWeight(Text)}
                    style={styles.input}
                />
                          
            </View>

            <SelectDropdown data={genders} defaultValue={genders[0]} onSelect={handleSelect} />      

            <View style={styles.operators}>
                <Pressable style={styles.roundbtn} onPress={BMICalc}>
                    <Text style={styles.operator} > Calculate BMI</Text>
                </Pressable>
                                                
            </View>

            <Text style={{ padding:20 }}>Your BMI is {bmi}, which means you are {bmiCategory}</Text>
            <Logo url='https://www.svgrepo.com/show/525703/calculator-minimalistic.svg'/>
        </View>
        
    )
}


export default BmiScreen;