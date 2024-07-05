import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch, Alert, Pressable, Image, Linking } from 'react-native';
import { clearData } from '../utils/storage';
import MyButton from '../components/MyButton';
import DarkModeContext from '../context/DarkModeContext';
import { clearCart } from '../utils/cart'; // Import clearCart function
import { useLanguage } from '../context/LanguageContext'; // Import useLanguage hook from LanguageContext

const SettingsScreen = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { language, changeLanguage, translations } = useLanguage(); // Access language state and changeLanguage function

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

  const handleClearCart = () => {
    Alert.alert(
      'Clear Cart',
      'Are you sure you want to clear all items in your cart?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: async () => {
            await clearCart();
            Alert.alert('Cart cleared');
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleChangeLanguage = (lang) => {
    changeLanguage(lang); // Call changeLanguage with the selected language
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#222' : '#f5f5f5' }]}>
      <Pressable onPress={() => Linking.openURL('https://github.com/QILINXIE02/Flower-app')}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </Pressable>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>
      <MyButton onPress={handleClearFavorites} title="Clear Favorites" />
      <MyButton onPress={handleClearCart} title="Clear Cart" />

      {/* Language setting buttons */}
      <Pressable onPress={() => handleChangeLanguage('en')} style={styles.languageButton}>
        <Text style={styles.languageButtonText}>{translations.welcome}</Text>
      </Pressable>
      <Pressable onPress={() => handleChangeLanguage('es')} style={styles.languageButton}>
        <Text style={styles.languageButtonText}>{translations.settings}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  languageButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  languageButtonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SettingsScreen;
