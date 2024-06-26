import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'; 

const Stack = createStackNavigator();

const MyStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    {/* <Stack.Screen name="Another" component={AnotherScreen} /> Add your other screens here */}
  </Stack.Navigator>
);

export default MyStack;
