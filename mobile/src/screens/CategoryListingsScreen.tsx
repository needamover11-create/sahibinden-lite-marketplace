import React, { useMemo } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { colors } from '../theme/colors';
import { listings } from '../data/listings';
import { categories } from '../data/categories';
import ListingCard from '../components/ListingCard';
import { RootStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;
type CategoryRoute = RouteProp<RootStackParamList, 'CategoryListings'>;

export default function CategoryListingsScreen() {
  const navigation = useNavigation<Nav>();
  const route = useRoute<CategoryRoute>();
  const { categoryId } = route.params;

  const category = categories.find((c) => c.id === categoryId);
  const items = useMemo(() => listings.filter((l) => l.category === categoryId), [categoryId]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} hitSlop={10} style={styles.backBtn}>
          <MaterialCommunityIcons name="arrow-left" size={22} color={colors.navy} />
        </Pressable>
        <Text style={styles.title}>{category?.title ?? 'İlanlar'}</Text>
        <View style={{ width: 22 }} />
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.empty}>Bu kategoride henüz ilan bulunmuyor.</Text>
        }
        renderItem={({ item }) => (
          <ListingCard
            listing={item}
            onPress={() => navigation.navigate('ListingDetail', { id: item.id })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  backBtn: { width: 22 },
  title: { fontSize: 17, fontWeight: '700', color: colors.text },
  row: { justifyContent: 'space-between' },
  listContent: { paddingHorizontal: 18, paddingBottom: 24 },
  empty: { textAlign: 'center', color: colors.textMuted, marginTop: 40 },
});
