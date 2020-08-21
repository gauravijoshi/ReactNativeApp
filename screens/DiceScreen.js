import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,Alert} from "react-native";

export default class DiceScreen extends React.Component {
 
  static navigationOptions = { header: null };

  myButton = ()=>{
    var numBer = this.getRandomNumber();
    switch (numBer)
    {
      case 1:
        this.setState({
          uri:require('../assets/dice1.png')})
          break;
      case 2:
        this.setState({
          uri:require('../assets/dice2.png')})
          break;
      case 3:
        this.setState({
          uri:require('../assets/dice3.png')})
          break;
      case 4:
        this.setState({
          uri:require('../assets/dice4.png')})
          break;
      case 5:
        this.setState({
          uri:require('../assets/dice5.png')})
          break;
      case 6:
        this.setState({
          uri:require('../assets/dice6.png')})
          break;
      default:
        Alert.alert("hello");


    }
  
  }
  getRandomNumber= ()=>{
    return Math.floor(Math.random()*6)+1;

   }
  constructor(props){
    
    super(props);
    this.state =
    {
                uri:require('../assets/dice1.png')
    }
    };

    
   

  render(){

    return( 
        

    <View style={styles.container}>
      <Image source={this.state.uri}/>
      <TouchableOpacity style={styles.button}
        onPress={this.myButton}
      >
      <Text style={styles.buttonText}>Play Game !</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backText}onPress={()=>{
          this.props.navigation.replace('Main');
          }}>
          <Text style={styles.backText}>Menu</Text>
        </TouchableOpacity>
    </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    fontSize:60,
    backgroundColor:"#003f5c"
  },
  button:{
    width:"80%",
    backgroundColor:"#b2ebf2",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  buttonText:{
    color:"black",
    fontSize:25
  },
  backText:{
    color:"white",
    fontSize:20,
    marginTop:20,
  },
})