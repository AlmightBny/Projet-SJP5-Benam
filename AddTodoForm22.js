import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';

export default function AddTodoForm2({
    todo1,
    onAddFormSubmit1,
    onAddInputChange1
  }) {
    return (
    //   <form onSubmit={onAddFormSubmit}>
    //     <input
    //       name="todo"
    //       type="text"
    //       placeholder="Entrer un mot"
    //       value={todo}
    //       onChange={onAddInputChange}
    //     />
    //     <Button onPress={onAddFormSubmit} title='+' color='blue'></Button>
    //   </form>

        <View>
        <TextInput style={styles.input} 
        name="todo1"
        type="text1"
        placeholder='Entrer un mot'
        onChange={onAddInputChange1}
        // onChangeText={changeHandler}
        />
        <TouchableOpacity style={styles.button} onPress={onAddFormSubmit1}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        </View>
    );
  }

  const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    text: {
        fontSize: 10,
        // fontWeight: 700,
        padding: 15,
        color: 'white'
    },
    button: {
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center'
    },
 });