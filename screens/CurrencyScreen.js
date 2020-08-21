import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Keyboard, Text, View,SafeAreaView,TextInput,TouchableOpacity, Alert ,TouchableWithoutFeedback} from 'react-native';

const currencyPerRupee =
{
  DOLLAR:0.014,
  EURO:0.012,
  POUND:0.099
}

export default class CurrencyScreen extends React.Component{

  static navigationOptions = { header: null };

  constructor(props){
    super(props);
      this.state ={
        inputValue:"",
        resultValue :"0.0"
      }
  }
  buttonPressed = (currency) =>{
    if(this.state.inputValue ==="")
    {
       Alert.alert("Enter Some Value In  "+currency);
    }
    else
    {
      let result = parseFloat(this.state.inputValue)  * currencyPerRupee[currency];
      this.setState({resultValue:result.toFixed(2)})
    }
  }
  render(){

  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <View style={styles.screenview}>
          <View style={styles.resultcontainer}>
            <Text style={styles.resultValue}>{this.state.resultValue}</Text>
          </View>
          <View style={styles.inputcontainer}>
            <TextInput
              style={styles.input}
              selectionColor="white"
              keyboardType="number-pad"
              placeholder="Amount"
              placeholderTextColor="white"
              value={this.state.inputValue}
              onChangeText={
                inputValue => this.setState({
                  inputValue
                })
              }
            />
          </View>
          <View style={styles.converterButtonContainer}>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("DOLLAR");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>DOLLAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("EURO");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>EURO</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("POUND");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>POUND</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.backText}onPress={()=>{
          this.props.navigation.replace('Main');
          }}>
          <Text style={styles.backText}>Menu</Text>
        </TouchableOpacity>
 </View>
      <StatusBar style="auto" />
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );

}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    //alignItems: 'center',
    justifyContent: 'center',
    
  
  },
  screenview:{
    marginTop:20,
  },
  resultcontainer:{
    width:"100%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:65,
    marginBottom:20,
    //justifyContent:"center",
    padding:20,
    alignItems:"center",
   },

  resultValue:{
    height:50,
    color:"white",
    fontWeight:"bold",
    fontSize:30
  },

  inputcontainer:{
    width:"100%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:65,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    alignItems:"center",
 },
 
 input:{
    height:50,
    color:"white",
    fontWeight:"bold",
    fontSize:30
 },

converterButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:20,
    borderColor:"#c1c1c1",
    borderWidth:2,
    borderRadius:25,
  },
  buttonConverter:{
    alignItems:"center",
    justifyContent:"center",
    height:100,
    borderColor:"#465881",
    borderWidth:2,
    borderRadius:25,
    width:"33.33%",
    backgroundColor:"#b2ebf2"

  },
  textButtonConverter:
  {
    color:"black",
    fontSize:20,
    fontWeight:"bold"

  },
  backText:{
    color:"white",
    fontSize:20,
    marginTop:20,
    alignItems:"center",
  },


});