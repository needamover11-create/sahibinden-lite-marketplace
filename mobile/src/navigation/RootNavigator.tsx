import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import TabNavigator from './TabNavigator';
import ListingDetailScreen from '../screens/ListingDetailScreen';
import CategoryListingsScreen from '../screens/CategoryListingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen
        name="ListingDetail"
        component={ListingDetailScreen}
        options={{ presentation: 'card' }}
      />
      <Stack.Screen
        name="CategoryListings"
        component={CategoryListingsScreen}
        options={{ presentation: 'card' }}
      />
    </Stack.Navigator>
  );
}
