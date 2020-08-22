import React from 'react';
import { View, Text,Button, StyleSheet,TextInput,TouchableOpacity } from 'react-native';

export default class RegistrationScreen extends React.Component {
  static navigationOptions = { header: null};

  constructor(props){
    super(props);
      this.state ={
        fullname:"",
        mobile:"",
        email:"",
        password1:"",
        password2 :""
      }
  }

addBtnPressed = () => {
  const { fullname, mobile, email, password1, password2 } = this.state  
  if(fullname == "" || mobile == "" || email == "" || password1 == "" || password2 == "") {
    alert('Please Enter Email and Password');
      } 
    else {
      this.props.navigation.replace('Login');
    }
  };

render(){
  return (
    <View style={styles.screen}>

        <View style={styles.logo}>
          <Text style={styles.logo}>Protean</Text>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Full Name..." 
            placeholderTextColor="#003f5c"
            onChangeText={fullname => this.setState({fullname})}
            />
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Mobile..." 
            placeholderTextColor="#003f5c"
            onChangeText={mobile => this.setState({mobile})}
            />
        </View>
      
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={email => this.setState({email})}
            />
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="New Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={password1 => this.setState({password1})}
            />
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Coinfirm Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={password2 => this.setState({password2})}
            />
        </View>

        <TouchableOpacity style={styles.loginBtn}
        onPress={this.addBtnPressed}>
          <Text style={styles.loginText}>Sign up</Text>
        </TouchableOpacity>
    </View>
  );
        }
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

