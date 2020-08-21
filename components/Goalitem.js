import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,Button,ScrollView,FlatList, TouchableOpacity} from 'react-native';

const GoalItem = props =>{
  GoalItem.navigationOptions = { header: null };
    return(
       
        <View style={styles.listItem}>
        <Text>{props.title}</Text>
      <TouchableOpacity onPress={props.onDelete}>
      <Text style={styles.goalText}>X</Text>
      </TouchableOpacity>
      </View>
      
      ); 
}

const styles = StyleSheet.create({
    listItem:{
      flexDirection:"row",
      padding:10,
      backgroundColor:"#deddfa",
      borderColor:"black",
      borderWidth:1,
      borderRadius:13,
      marginVertical:10,
      justifyContent:"space-between"
    },

    goalText:{
        color:"#d92027",
        fontWeight:"bold",
        fontSize:15
      },
    
  });

export default GoalItem;