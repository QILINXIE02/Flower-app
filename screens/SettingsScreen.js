import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch, Alert, Pressable, Image, Linking } from 'react-native';
import { clearData } from '../utils/storage';
import MyButton from '../components/MyButton';
import DarkModeContext from '../components/DarkModeContext'; // Import the context

const SettingsScreen = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleClearFavorites = () => {
    Alert.alert(
      'Clear Favorites',
      'Are you sure you want to clear all favorites?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: async () => {
            await clearData('favorites');
            Alert.alert('Favorites cleared');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#222' : '#f5f5f5' }]}>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>
      <MyButton onPress={handleClearFavorites} title="Clear Favorites" />
      <Pressable onPress={() => Linking.openURL('https://github.com/QILINXIE02/Flower-app')}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  settingText: {
    fontSize: 18,
    color: '#333',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default SettingsScreen;
