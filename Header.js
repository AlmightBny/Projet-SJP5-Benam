import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
 

  return(

    <View style={styles.header}>
      <Text style={styles.title}>Projet Benam SJP5</Text>
    </View>

  ); 
}

const styles = StyleSheet.create({
    header: {
        height:80,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    title: {
        fontSize: 25,
        // fontWeight: 900,
        color: 'white',
        alignItems: 'center',
    },
 });