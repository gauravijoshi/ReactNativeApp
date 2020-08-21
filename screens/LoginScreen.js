import React from 'react';
import { View, Text,Button, StyleSheet,TextInput,TouchableOpacity } from 'react-native';

const LoginScreen = props => {
  LoginScreen.navigationOptions = { header: null};
    return (
    <View style={styles.screen}>

        <View style={styles.logo}>
          <Text style={styles.logo}>Protean</Text>
        </View>
      
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            />
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            />
        </View>

        <TouchableOpacity style={styles.loginBtn}onPress={()=>{
          props.navigation.replace('Main');
          }}>
          <Text style={styles.loginText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.regiText}onPress={()=>{
          props.navigation.replace('Registration');
          }}>
          <Text style={styles.regiText}>Don't have an account? Sign up here</Text>
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

  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },

  inputText:{
    height:50,
    color:"white"
  },

  loginBtn:{
    width:"80%",
    backgroundColor:"#b2ebf2",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },

  loginText:{
    color:"black",
    fontSize:25
  },

  regiText:{
    color:"white",
    fontSize:15
  },

  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#b2ebf2",
    marginBottom:40
  }
});

export default LoginScreen;