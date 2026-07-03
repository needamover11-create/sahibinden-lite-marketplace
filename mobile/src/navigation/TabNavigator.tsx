import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { TabParamList } from './types';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import PostAdScreen from '../screens/PostAdScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator<TabParamList>();

const ICONS: Record<keyof TabParamList, keyof typeof MaterialCommunityIcons.glyphMap> = {
  Home: 'home-variant',
  Search: 'magnify',
  PostAd: 'plus-circle',
  Favorites: 'heart',
  Profile: 'account-circle',
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.navy,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIcon: ({ color, size, focused }) => {
          const name = ICONS[route.name as keyof TabParamList];
          if (route.name === 'PostAd') {
            return (
              <View style={styles.postAdIcon}>
                <MaterialCommunityIcons name="plus" size={24} color={colors.white} />
              </View>
            );
          }
          return <MaterialCommunityIcons name={name} size={focused ? size + 2 : size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Ana Sayfa' }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ title: 'Ara' }} />
      <Tab.Screen name="PostAd" component={PostAdScreen} options={{ title: 'İlan Ver' }} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Favoriler' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profilim' }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 62,
    paddingBottom: 8,
    paddingTop: 6,
    borderTopColor: colors.border,
  },
  tabLabel: { fontSize: 10, fontWeight: '600' },
  postAdIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.navy,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
});
