import React, {useEffect} from 'react';
import { Card } from '@rneui/themed';
import { View, ScrollView, Text, ActivityIndicator, FlatList} from 'react-native';
import { styles } from '../themes/dark';
import ProfilePicture from '../components/ProfilePicture';
import { Image } from '@rneui/themed';

interface currencyDataProps {
    currency: string;
    value: number;
  }

interface CardScreenProps {
    navigation: any;
}

const CardScreen: React.FC<CardScreenProps> = ( {navigation} ) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState();
    const [response, setResponse] = React.useState();
    const [currencyData, setCurrencyData] = React.useState<currencyDataProps[]>([]);

    useEffect(() => {    
      fetch('https://v6.exchangerate-api.com/v6/9419a19f88818c213fab7750/latest/USD')
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoading(false);
            setResponse(result);
  
            console.log('The Result', result)          
  
            const timestamp = result['time_last_update_utc']
            const timestampDate = new Date(timestamp);
            const month = timestampDate.getUTCMonth() + 1;
            const date = timestampDate.getUTCDate();
            const getlabels = `${date}/${month}`;
  
            console.log('labels', getlabels)
  
            const conversionRates = Object.keys(result['conversion_rates']).map(currency => ({
              currency,
              value: parseFloat(result['conversion_rates'][currency]),
            }));
  
            setCurrencyData(conversionRates);
            
          },
  
          (error) => {
            setIsLoading(false);
            setError(error);
            console.log(error);
          }
        )    
    }, []);
    
    const renderCurrencyItem = ({ item }: { item: currencyDataProps }) => (            
      <Card containerStyle={styles.card}>
          <Card.Title>{item.currency}</Card.Title>
          <Card.Divider />
          <View>
              <ProfilePicture url={`https://i.imgur.com/x5KeC5s.png`} />
              <Text style={styles.text}>Currency {item.currency} : {item.value}</Text>
          </View>
      </Card>        
    );
  
    const getListData = () => {
      if (isLoading) {
        return <ActivityIndicator size='small'/>
      }
  
      if (error) {
        return (            
          <Text>{ error }</Text>            
        );        
      }
        return (
            <View>
                <FlatList data={currencyData} keyExtractor={(item) => item.currency} renderItem={renderCurrencyItem}/>
            </View>            
        )
    }


    return (        
      <View>
          {getListData()}
      </View>            
    )
}

export default CardScreen;

{/* <View style={styles.cardcontainer}>        
                <Card containerStyle={styles.card}>
                    <Card.Title>Card 1</Card.Title>
                    <Card.Divider/>
                        <View>
                            <ProfilePicture url='https://i.imgur.com/x5KeC5s.png'/>
                            <Text style={ styles.text}> ASEP </Text>
                        </View>
                </Card>
                <Card containerStyle={styles.card}>
                    <Card.Title>Card 1</Card.Title>
                    <Card.Divider/>
                        <View>
                            <ProfilePicture url='https://i.imgur.com/x5KeC5s.png'/>
                            <Text style={ styles.text}> ASEP </Text>
                        </View>
                </Card>
                <Card containerStyle={styles.card}>
                    <Card.Title>Card 1</Card.Title>
                    <Card.Divider/>
                        <View>
                            <ProfilePicture url='https://i.imgur.com/x5KeC5s.png'/>
                            <Text style={ styles.text}> ASEP </Text>
                        </View>
                </Card>
                <Card containerStyle={styles.card}>
                    <Card.Title>Card 1</Card.Title>
                    <Card.Divider/>
                        <View>
                            <ProfilePicture url='https://i.imgur.com/x5KeC5s.png'/>
                            <Text style={ styles.text}> ASEP </Text>
                        </View>
                </Card>
                <Card containerStyle={styles.card}>
                    <Card.Title>Card 1</Card.Title>
                    <Card.Divider/>
                        <View>
                            <ProfilePicture url='https://i.imgur.com/x5KeC5s.png'/>
                            <Text style={ styles.text}> ASEP </Text>
                        </View>
                </Card>            
            </View> */}        