import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, button } from 'react-native';

export default function TodoItem2({
    todo1,
    onEditClick1,
    onDeleteClick1
  }) {

    
    return (
    
        <View id={todo1.id} style={{flexDirection:'row', flexWrap:'wrap'}}>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{todo1.text}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => onEditClick1(todo1)}>
            <Text style={styles.text1}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => onDeleteClick1(todo1.id)}>
            <Text style={styles.text1}>-</Text>
            </TouchableOpacity> 
        </View>
      



    );
  }

  const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 10,
        width: 100
    },
    text: {
        fontSize: 10,
        // fontWeight: 700,
        padding: 10,
    },
    text1: {
        fontSize: 10,
        // fontWeight: 700,
        padding: 10,
        color: 'white'
    },
    button1: {
        backgroundColor: 'blue',
        marginTop: 10,
        marginLeft: 5,
        color: 'white',
    },
 });