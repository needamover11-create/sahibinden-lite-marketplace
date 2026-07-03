import React, { useMemo } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../theme/colors';
import { listings } from '../data/listings';
import { useFavorites } from '../context/FavoritesContext';
import ListingCard from '../components/ListingCard';
import { RootStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function FavoritesScreen() {
  const navigation = useNavigation<Nav>();
  const { favoriteIds } = useFavorites();
  const favorites = useMemo(
    () => listings.filter((l) => favoriteIds.includes(l.id)),
    [favoriteIds]
  );

  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.header}>Favorilerim</Text>
      {favorites.length === 0 ? (
        <View style={styles.emptyWrap}>
          <MaterialCommunityIcons name="heart-outline" size={48} color={colors.border} />
          <Text style={styles.emptyText}>Henüz favori ilanınız yok.</Text>
          <Text style={styles.emptySubtext}>
            Beğendiğiniz ilanlardaki kalp ikonuna dokunarak buraya ekleyebilirsiniz.
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <ListingCard
              listing={item}
              onPress={() => navigation.navigate('ListingDetail', { id: item.id })}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg, paddingHorizontal: 18 },
  header: { fontSize: 22, fontWeight: '800', color: colors.navy, marginTop: 12, marginBottom: 14 },
  row: { justifyContent: 'space-between' },
  listContent: { paddingBottom: 24 },
  emptyWrap: { alignItems: 'center', marginTop: 80, paddingHorizontal: 30 },
  emptyText: { fontSize: 15, fontWeight: '700', color: colors.text, marginTop: 14 },
  emptySubtext: {
    fontSize: 13,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 19,
  },
});
