import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function AddTodo({submitHandler}) {

  const [text1, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  }

  return(

    <View>
      <TextInput style={styles.input}
        placeholder='Entrer un mot'
        onChangeText={changeHandler}>
      </TextInput>
      <Button onPress={() => submitHandler(text1)} title='+' color='blue'></Button>
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
 });