import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,Button,ScrollView,FlatList,TouchableOpacity} from 'react-native';

import Goalitem from "../components/Goalitem";
import GoalInput from "../components/Goalinput";
export default function TodoScreen(props)  {
  TodoScreen.navigationOptions = { header: null };

  const [courseGoal,setCourseGoals]= useState([]);
  const [ismodelOn,setismodelOn]= useState(false);
 
  // const addGoalHandeler = () =>{
  //   console.log(enteredGoal);
  //   setCourseGoals(cureentGoals => [...cureentGoals,enteredGoal]);
  // }
  const addGoalHandeler = goalTitle =>{
    setCourseGoals(cureentGoals => [{key:Math.random().toString(),value:goalTitle},...cureentGoals]);
    setismodelOn(false);
  }

  const removeGoalId = goalId =>{

    setCourseGoals(cureentGoals =>{
      console.log("started deleting");
      return cureentGoals.filter((goal) => goal.key !== goalId );
    })
    
  }

  const setItemfalse = ()=>{
    setismodelOn(false);

  }


  return (
    <View style={styles.container}>

        <TouchableOpacity style={styles.backText}onPress={()=>{
          props.navigation.replace('Main');
          }}>
          <Text style={styles.backText}>Menu</Text>
        </TouchableOpacity>
      
       <TouchableOpacity style={styles.addBtn}onPress={()=>{
          setismodelOn(true);
          }}>
          <Text style={styles.addText}>Add Goals</Text>
        </TouchableOpacity>

      <GoalInput visiableItem={ismodelOn}  onAddGoal={addGoalHandeler}
      onDisable={setItemfalse}
      
      />    
      
      

     <FlatList
     data={courseGoal}
     renderItem={itemData=>(
       <Goalitem
       onDelete={
        removeGoalId.bind(this,itemData.item.key)
       }
       title={itemData.item.value}
       />
     )}
     />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  addBtn:{
    width:"80%",
    backgroundColor:"#b2ebf2",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    marginBottom:10
  },

  addText:{
    color:"black",
    fontSize:25
  },
  backText:{
    color:"white",
    fontSize:20,
    marginTop:30
  },
});