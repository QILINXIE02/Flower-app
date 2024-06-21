import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const App = () => {
  const handlePress = () => {
    console.log('Pressable pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flower Bouquet Customizer App</Text>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'gray' : 'lightblue',
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
          },
          styles.button,
        ]}
        accessibilityRole="button"
      >
        {({ pressed }) => (
          <Text style={styles.buttonText}>
            {pressed ? 'Pressed!' : 'Press me (Pressable)'}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
});

export default App;
