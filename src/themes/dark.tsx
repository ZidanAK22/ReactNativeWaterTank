import * as React from 'react';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({  
    cardcontainer: {
      flex:1
    },

    button: {
      color: 'white',
      marginTop:20,
      marginBottom:10,
      backgroundColor: 'cornflowerblue',
      padding:20,
      alignItems:'center',
      borderRadius: 20,    
    },

    card: {
      marginTop:20,
      padding:20,      
      alignItems:'center',
      alignContent: 'center',      
    },

    text: {
      textAlign: 'center',      
      color: 'black',
      fontWeight:'bold',
    },

    image: {
      resizeMode: 'cover',      
      aspectRatio: 1,
      width: '100%',
    },

    home: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
      padding:30,
    },
  
    login: {            
      padding:30,         
      height:'100%',
      width:'100%',
    },

    textinput: {      
    },
  
    bmi: {
      padding:20,
      alignItems:'center',
    },
  
    merahbadag: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 30,
      width:200,
      backgroundColor: 'magenta'
    },
  
    birubadag: {
      color: 'black',
      fontSize:30,          
      marginTop:50,
      textAlign: 'center',
    },
  
    logo: {
      flex: 1,
      width: null,
      height: 200,
      resizeMode: 'contain',
      margin:'auto',    
      alignContent: 'center',
    },

    input:{
      borderColor: 'black',
      borderRadius: 10,
      color: 'black',      
      borderBottomWidth:1,
    },

    operators:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },

    roundbtn:{    
      backgroundColor: 'blue',
      padding: 5,
      borderRadius: 30,
      marginTop: 10,
      marginBottom: 10,
    },

    operator:{
      color: 'white',
      fontSize: 18,
      padding: 2,
      margin: 1,
    },

    profile:{    
      fontFamily: 'serif',      
      flexDirection:'column',
      height:'auto',
    },

    profilepicture:{
      height:200,
      width:200,
      borderRadius: 100, // half the height and width for circle. Or 50% in css.            
      resizeMode: 'contain',
      margin:10,            
    },

    profilecontent:{      
      alignItems:'center',
    },
    
    banner:{
      opacity: 0.5,    
    }
}); 
