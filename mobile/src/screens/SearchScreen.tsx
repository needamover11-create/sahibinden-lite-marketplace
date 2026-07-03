import React, { useMemo, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, radius } from '../theme/colors';
import { listings } from '../data/listings';
import ListingCard from '../components/ListingCard';
import { RootStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function SearchScreen() {
  const navigation = useNavigation<Nav>();
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('tr-TR');
    if (!q) return listings;
    return listings.filter(
      (l) =>
        l.title.toLocaleLowerCase('tr-TR').includes(q) ||
        l.location.toLocaleLowerCase('tr-TR').includes(q)
    );
  }, [query]);

  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.header}>Ara</Text>
      <View style={styles.searchBox}>
        <MaterialCommunityIcons name="magnify" size={20} color={colors.textMuted} />
        <TextInput
          style={styles.input}
          placeholder="Ürün, başlık veya konum ara"
          placeholderTextColor={colors.textMuted}
          value={query}
          onChangeText={setQuery}
          autoFocus
        />
        {query.length > 0 && (
          <MaterialCommunityIcons
            name="close-circle"
            size={18}
            color={colors.textMuted}
            onPress={() => setQuery('')}
          />
        )}
      </View>

      <Text style={styles.resultCount}>{results.length} sonuç bulundu</Text>

      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.empty}>Aramanızla eşleşen ilan bulunamadı.</Text>}
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
  safe: { flex: 1, backgroundColor: colors.bg, paddingHorizontal: 18 },
  header: { fontSize: 22, fontWeight: '800', color: colors.navy, marginTop: 12 },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.card,
    marginTop: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  input: { flex: 1, fontSize: 14, color: colors.text },
  resultCount: { fontSize: 12, color: colors.textMuted, marginTop: 14, marginBottom: 10 },
  row: { justifyContent: 'space-between' },
  listContent: { paddingBottom: 24 },
  empty: { textAlign: 'center', color: colors.textMuted, marginTop: 40 },
});
