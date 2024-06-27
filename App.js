import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import Gallery from './screens/Gallery';
import PurchaseScreen from './screens/PurchaseScreen';
import SettingsScreen from './screens/SettingsScreen';

import { DarkModeProvider } from './components/DarkModeContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="heart" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Gallery"
      component={Gallery}
      options={{
        tabBarLabel: 'Gallery',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="flower" color={color} size={size} />
        ),
      }}
    />
      <Tab.Screen
      name="Setting"
      component={SettingsScreen}
      options={{
        tabBarLabel: 'Setting',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cog" color={color} size={size} />
        ),
      }}
    />
         <Tab.Screen
      name="Purchase"
      component={PurchaseScreen}
      options={{
        tabBarLabel: 'Purchase',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cart" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="HomeScreen" component={MainTabNavigator} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <DarkModeProvider>
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
    </DarkModeProvider>
  );
};

export default App;
