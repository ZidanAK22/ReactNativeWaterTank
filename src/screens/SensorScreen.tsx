import React, { useEffect, useState} from 'react';
import { Text } from '@rneui/themed';
import { View } from 'react-native';
import MQTT from 'sp-react-native-mqtt';

interface HomeScreenProps {
    navigation: any;  
}

const SensorScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [mqttClient, setMqttClient] = useState<any>(null);
    const [mqttMessage, setMqttMessage] = useState<string | null>(null);

    useEffect(() => {
        if (MQTT) {
          // Create MQTT client
          const client = MQTT.createClient({
            uri: 'mqtt://broker.hivemq.com:8884',
            clientId: '10849ad2-c558-44c2-9a34-47014303eefa',
          });
    
          client
            .then((clientInstance) => {
              setMqttClient(clientInstance);
    
              // Set up event handlers
              clientInstance.on('closed', () => {
                console.log('mqtt.event.closed');
              });
    
              clientInstance.on('error', function(msg) {
                console.log('mqtt.event.error', msg);
              });
            
              clientInstance.on('message', function(msg) {
                console.log('mqtt.event.message', msg);
              });
            
              clientInstance.on('connect', function() {
                console.log('connected');
                clientInstance.subscribe('/data', 0);
                clientInstance.publish('/data', "test", 0, false);
              });
    
              // Connect to the MQTT broker
              clientInstance.connect();
    
              // Subscribe to a topic once connected
              clientInstance.subscribe('lele-dumbo-testing', 0);
            })
            .catch((err) => {
              console.error('Error creating MQTT client:', err);
            });
    
          // Clean up on component unmount
          return () => {
            if (mqttClient) {
              mqttClient.disconnect();
            }
          };
        } else {
          console.error('MQTT library is not properly initialized.');
        }
      }, [mqttClient, mqttMessage]);

    return (
        <View style={{ alignItems:'center', alignContent:'center', flex:1, justifyContent:'center' }}>
            <Text>{ mqttMessage || 'waiting for message'}</Text>
        </View>
    )
}

export default SensorScreen;