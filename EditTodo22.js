import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';

export default function EditForm2({
  currentTodo1,
  setIsEditing1,
  onEditInputChange1,
  onEditFormSubmit1
}) {
  return (
    // <form onSubmit={onEditFormSubmit1}>
    //   <label htmlFor="updateTodo">Modifier </label>
    //   <input
    //     name="updateTodo1"
    //     type="text1"
    //     placeholder="Modifier le mot"
    //     value={currentTodo1.text}
    //     onChange={onEditInputChange1}
    //   />
    //   <button type="submit" onClick={onEditFormSubmit1}>
    //     Update
    //   </button>
    //   <button onClick={() => setIsEditing1(false)}>Cancel</button>
    // </form>

    <View>
    <TextInput style={styles.input} 
    name="updateTodo1"
    type="text1"
    placeholder='Modifier un mot'
    value={currentTodo1.text}
    onChange={onEditInputChange1}
    // onChangeText={changeHandler}
    />
    <TouchableOpacity style={styles.button} onPress={onEditFormSubmit1}>
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