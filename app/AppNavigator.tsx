// AppNavigator.tsx
import React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import CountriesScreen from './Countries';
import TeamsScreen from './Teams';
import PlayersScreen from './Players';
import FixturesScreen from './Fixtures';

import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false,
                                                               contentStyle: {
                                                                backgroundColor: '#000000',
                                                               }}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Countries" component={CountriesScreen} />
        <Stack.Screen name="Teams" component={TeamsScreen} />
        <Stack.Screen name="Players" component={PlayersScreen} />
        <Stack.Screen name="Fixtures" component={FixturesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
