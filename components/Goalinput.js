import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal,TouchableOpacity,Text } from 'react-native';

const GoalInput = props => {
  GoalInput.navigationOptions = { header: null };
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalhander = ()=>{
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    
    <Modal visible={props.visiableItem} animationType="slide">
        
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonView}>
        <TouchableOpacity style={styles.Btn}onPress={addGoalhander}>
          <Text style={styles.Text}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelBtn}onPress={props.onDisable}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        
        </View>
      </View>
    </Modal>
    
  );
};

const styles = StyleSheet.create({
    
  inputContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003f5c',
  },
  input: {
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:60,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    color:"white"
  },
  buttonView:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  Btn:{
    width:"40%",
    backgroundColor:"#b2ebf2",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  Text:{
    color:"black",
    fontSize:20
  },
  cancelBtn:{
    width:"40%",
    backgroundColor:"#e71414",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  cancelText:{
    color:"black",
    fontSize:20
  },
});

export default GoalInput;