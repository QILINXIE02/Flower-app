import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const MyButton = ({ onPress, title }) => (
  <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MyButton;
