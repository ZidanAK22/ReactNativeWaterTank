import React, {useEffect, useState} from 'react'
import { View, Text, Button, ActivityIndicator, ScrollView, Pressable, TextInput, Alert } from 'react-native';
import { firebase } from '@react-native-firebase/firestore';
import { styles } from '../themes/dark';

interface CrudScreenProps {
    navigation: any
}

const CrudScreen: React.FC<CrudScreenProps> = ({navigation}) => {
    const [data, setData] = useState<any[]>([]);
    const [id, setID] = useState();
    const [song, setSong] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])
     // Create data
    const createData = async (data: any) => {
        await firebase.firestore().collection('items').add(data);
    };

    // Read data
    const readData = async () => {
        const snapshot = await firebase.firestore().collection('items').get();
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    };

    // Update data
    const updateData = async (itemId:any, newData:any) => {
        await firebase.firestore().collection('items').doc(itemId).update(newData);
    };

    // Delete data
    const deleteData = async (itemId:any) => {
        await firebase.firestore().collection('items').doc(itemId).delete();
    };

    const fetchData = async () => {
        const result = await readData();
        setData(result);
    };

    const handleCreate = (song:any) => {        
        try {
            setLoading(true);
            const newSong = {Song: song};
            createData(newSong);
            fetchData(); 
            Alert.alert('Success', 'Data created successfully!');
        } catch (error: any) {
            console.error('Error creating data:', error.message);
            Alert.alert('Error', 'Failed to create data. Please try again.');   
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = (itemId:any, song:any) => {
        try {
            setLoading(true);
            const updatedItem = { Song: song };
            updateData(itemId, updatedItem);
            fetchData(); 
            Alert.alert('Success', 'Data update successfully!')
        } catch (error:any) {
            console.error('Error update data:', error.message);
            Alert.alert('Error', 'Failed to update data. Please try again.');  
        }        
    };

    const handleDelete = (itemId:any) => {
        deleteData(itemId);
        fetchData(); // Refresh data after deleting
    };    

    const selectData = (itemId:any) => {
        setID(itemId);
    }

    return(
        <ScrollView contentContainerStyle={{alignItems:'center', width:'100%', backgroundColor:'white' }}>                       
            <TextInput
                placeholder="Should I Stay or Should I Go"
                value={song}
                onChangeText={(text) => setSong(text)}
                style={{ borderBottomWidth:1, color:'black' }}
            />
            <Text style={{ color:'black' }}>SelectedID : {id}</Text>

            <View style={{ flex:1, flexDirection:'row', gap:20 }}>
                <Pressable onPress={() => handleDelete(id)}>
                    <Text style={styles.button}>
                        Delete
                    </Text>
                </Pressable>
                <Pressable onPress={() => handleCreate(song)}>
                    <Text style={styles.button}>
                        Add
                    </Text>
                </Pressable>
                <Pressable onPress={() => handleUpdate(id, song)}>
                    <Text style={styles.button}>
                        Update
                    </Text>
                </Pressable>            
            </View>

            {data.map((item) => (
                <Pressable
                    key={item.id}
                    onPress={() => selectData(item.id)}                    
                >                
                    <View>                        
                        <Text style={{ fontWeight:'bold', fontSize:20, marginBottom:2 }}>{item.Song}</Text>                
                        <Text>ID : {item.id} {"\n"}</Text>
                    </View>                                    
                </Pressable>                
            ))}            
        </ScrollView>
    )
}

export default CrudScreen;