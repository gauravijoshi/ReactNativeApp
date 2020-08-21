import React from 'react';
import { View, Text,Button, StyleSheet,TextInput,TouchableOpacity } from 'react-native';

const MainScreen = props => {
  MainScreen.navigationOptions = { header: null};
  return (
    <View style={styles.screen}>

        <View style={styles.logo}>
          <Text style={styles.logo}>Protean</Text>
        </View>
      
        <TouchableOpacity style={styles.NextBtn}onPress={()=>{
          props.navigation.replace('Dice');
          }}>
          <Text style={styles.nextText}>Dice Game</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.NextBtn}onPress={()=>{
          props.navigation.replace('Currency');
          }}>
          <Text style={styles.nextText}>Currency Convertor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.NextBtn}onPress={()=>{
          props.navigation.replace('Todo');
          }}>
          <Text style={styles.nextText}>Todo List</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutText}onPress={()=>{
          props.navigation.replace('Login');
          }}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  NextBtn:{
    width:"80%",
    backgroundColor:"#b2ebf2",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },

  logoutText:{
    color:"white",
    fontSize:20,
    marginTop:20,
  },

  nextText:{
    color:"black",
    fontSize:25,
  },

  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#b2ebf2",
    marginBottom:40
  }
});

export default MainScreen;