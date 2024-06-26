import React, { useState } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const MyButton = ({ onPress, title }) => {
  const [pressed, setPressed] = useState(false);

  const handlePressIn = () => {
    setPressed(true);
  };

  const handlePressOut = () => {
    setPressed(false);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.buttonPressed : styles.buttonNormal,
      ]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 0,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonNormal: {
    backgroundColor: 'blue',
  },
  buttonPressed: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MyButton;
