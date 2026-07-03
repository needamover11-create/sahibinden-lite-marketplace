import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { colors, radius } from '../theme/colors';
import { categories } from '../data/categories';
import { listings } from '../data/listings';
import CategoryCard from '../components/CategoryCard';
import ListingCard from '../components/ListingCard';
import { RootStackParamList, TabParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<Nav>();
  const [query, setQuery] = useState('');
  const featured = listings.filter((l) => l.featured);

  return (
    <SafeAreaView style={styles.safe}>
      <LinearGradient colors={[colors.navy, colors.navySoft]} style={styles.hero}>
        <View style={styles.header}>
          <View>
            <Text style={styles.brand}>Sahibinden Lite</Text>
            <Text style={styles.tagline}>Al, sat, bul — kolayca.</Text>
          </View>
          <View style={styles.locationPill}>
            <MaterialCommunityIcons name="map-marker" size={14} color={colors.navy} />
            <Text style={styles.locationText}>İstanbul</Text>
          </View>
        </View>

        <Pressable
          style={styles.searchBox}
          onPress={() =>
            navigation
              .getParent<BottomTabNavigationProp<TabParamList>>()
              ?.navigate('Search')
          }
        >
          <MaterialCommunityIcons name="magnify" size={20} color={colors.textMuted} />
          <TextInput
            style={styles.searchInput}
            placeholder="Ne aramıştınız?"
            placeholderTextColor={colors.textMuted}
            value={query}
            onChangeText={setQuery}
            editable
          />
        </Pressable>
      </LinearGradient>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Kategoriler</Text>
        </View>
        <View style={styles.categoryGrid}>
          {categories.map((c) => (
            <CategoryCard
              key={c.id}
              category={c}
              onPress={() => navigation.navigate('CategoryListings', { categoryId: c.id })}
            />
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Öne Çıkan İlanlar</Text>
        </View>
        <FlatList
          data={featured}
          keyExtractor={(item) => item.id}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <ListingCard
              listing={item}
              onPress={() => navigation.navigate('ListingDetail', { id: item.id })}
            />
          )}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Tüm İlanlar</Text>
        </View>
        <FlatList
          data={listings}
          keyExtractor={(item) => item.id}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <ListingCard
              listing={item}
              onPress={() => navigation.navigate('ListingDetail', { id: item.id })}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.navy },
  scroll: { flex: 1, backgroundColor: colors.bg },
  hero: {
    paddingTop: 12,
    paddingBottom: 20,
    borderBottomLeftRadius: radius.lg,
    borderBottomRightRadius: radius.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 18,
  },
  brand: { fontSize: 22, fontWeight: '800', color: colors.white },
  tagline: { fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2 },
  locationPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.gold,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: radius.pill,
  },
  locationText: { fontSize: 12, fontWeight: '600', color: colors.navy },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.card,
    marginHorizontal: 18,
    marginTop: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: radius.md,
  },
  searchInput: { flex: 1, fontSize: 14, color: colors.text },
  sectionHeader: {
    paddingHorizontal: 18,
    marginTop: 22,
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: colors.text },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
  listContent: { paddingHorizontal: 18, paddingBottom: 4 },
  row: { justifyContent: 'space-between' },
});
