import React, {useEffect, useState} from 'react'
import database from '@react-native-firebase/firestore'
import { View, Text, Button, FlatList } from 'react-native';
import { firebase } from '@react-native-firebase/firestore';

interface CrudScreenProps {
    navigation: any
}

const CrudScreen: React.FC<CrudScreenProps> = ({navigation}) => {
    const [data, setData] = useState<any[]>([]);

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

    const handleCreate = () => {
        const newItem = { name: 'New Item' };
        createData(newItem);
        fetchData(); // Refresh data after creating
    };

    const handleUpdate = (itemId:any) => {
        const updatedItem = { name: 'Updated Item' };
        updateData(itemId, updatedItem);
        fetchData(); // Refresh data after updating
    };

    const handleDelete = (itemId:any) => {
        deleteData(itemId);
        fetchData(); // Refresh data after deleting
    };    

    return(
        <View>
            {data.map((item) => (
                <View key={item.id}>
                    <Text>ID : {item.id}</Text>
                    <Text>Song : {item.Song}</Text>
                </View>                    
            ))}
        </View>
    )
}

export default CrudScreen;