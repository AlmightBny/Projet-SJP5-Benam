import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';

export default function AddTodoForm({
    todo,
    onAddFormSubmit,
    onAddInputChange
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
        name="todo"
        type="text"
        placeholder='Entrer un mot'
        onChange={onAddInputChange}
        // onChangeText={changeHandler}
        />
        <TouchableOpacity style={styles.button} onPress={onAddFormSubmit}>
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