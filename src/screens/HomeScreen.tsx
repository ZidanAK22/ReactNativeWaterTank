import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Pressable, Button, FlatList } from 'react-native';
import {styles} from '../themes/dark';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

interface HomeScreenProps {
  navigation: any;  
}

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
  }[];
}

interface currencyDataProps {
  currency: string;
  value: number;
}


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {  
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState();
  const [response, setResponse] = React.useState();
  const [currencyData, setCurrencyData] = React.useState<currencyDataProps[]>([]);
  // const [stockSymbol, setStockSymbol] = React.useState('AAPL');
  const [chartData, setChartData] = React.useState<ChartData>({
    labels: ["06/11", "07/11"],
    datasets: [
      {
        data: [
          13500,
          14500,
        ]
      }
    ]
  });  
  
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

          setCurrencyData(conversionRates)
    
          const getdata = parseFloat(result['conversion_rates']['IDR'])                  

          console.log('Data',getdata)
          setChartData(prevState => ({
            labels: [...prevState.labels , getlabels],
            datasets: [
              {
                data: [...prevState.datasets[0].data ,getdata]
              }
            ]
          })
          )
        },

        (error) => {
          setIsLoading(false);
          setError(error);
          console.log(error);
        }
      )

  }, []);

  const renderCurrencyItem = ({ item }: { item: currencyDataProps }) => (
    <View>
      <Text>{`${item.currency}: ${item.value}`}</Text>
    </View>
  );

  const getListData = () => {
    if (isLoading) {
      return <ActivityIndicator size='small'/>
    }

    if (error) {
      return <Text>{ error }</Text>
    }

    

    return <FlatList data={currencyData} keyExtractor={(item) => item.currency} renderItem={renderCurrencyItem}/>
  }

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size='large'/>
    }

    if (error) {
      return <Text>{ error }</Text>
    }
    
    console.log(chartData)
    return <LineChart
      data={ chartData }
      width={Dimensions.get("window").width} // from react-native
      height={220}
      yAxisLabel="$"
      yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
    />
  }

  const getCurrentDate=()=>{
 
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;    

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + '/' + month;//format: d-m-y;
}

  const addDummyData = () => {
    const randomLabel = getCurrentDate();
    const randomData = Math.floor(Math.random() * 10000);
  
      setChartData(prevState => ({
        labels: [...prevState.labels , randomLabel],
        datasets: [
          {
            data: [...prevState.datasets[0].data , randomData]
          }
        ]
      }));
  }


  return (
    <View style={styles.home}>
      <Text>Today's USD to IDR value</Text>    
      {getContent()}                
      <Button title='Add dummy data' onPress={addDummyData}/>      
      {getListData()}
    </View>
  )
};


export default HomeScreen;
