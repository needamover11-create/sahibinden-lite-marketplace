import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Listing } from '../types';
import { colors, radius } from '../theme/colors';
import { formatPrice } from '../utils/format';
import { useFavorites } from '../context/FavoritesContext';

interface Props {
  listing: Listing;
  onPress: () => void;
}

export default function ListingCard({ listing, onPress }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(listing.id);

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imageWrap}>
        <Text style={styles.emoji}>{listing.emoji}</Text>
        {listing.featured && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Öne Çıkan</Text>
          </View>
        )}
        <Pressable
          hitSlop={8}
          style={styles.favBtn}
          onPress={(e) => {
            e.stopPropagation();
            toggleFavorite(listing.id);
          }}
        >
          <MaterialCommunityIcons
            name={favorite ? 'heart' : 'heart-outline'}
            size={18}
            color={favorite ? colors.danger : colors.textMuted}
          />
        </Pressable>
      </View>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {listing.title}
        </Text>
        <Text style={styles.price}>{formatPrice(listing.price)}</Text>
        <View style={styles.metaRow}>
          <MaterialCommunityIcons name="map-marker-outline" size={13} color={colors.textMuted} />
          <Text style={styles.metaText} numberOfLines={1}>
            {listing.location}
          </Text>
        </View>
        <Text style={styles.date}>{listing.postedAt}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: colors.card,
    borderRadius: radius.md,
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  imageWrap: {
    height: 100,
    backgroundColor: colors.goldSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: { fontSize: 40 },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: colors.navy,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radius.pill,
  },
  badgeText: { color: colors.white, fontSize: 10, fontWeight: '600' },
  favBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: colors.white,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: { padding: 10 },
  title: { fontSize: 13, fontWeight: '600', color: colors.text, minHeight: 34 },
  price: { fontSize: 15, fontWeight: '700', color: colors.navy, marginTop: 4 },
  metaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6, gap: 3 },
  metaText: { fontSize: 11, color: colors.textMuted, flexShrink: 1 },
  date: { fontSize: 10, color: colors.textMuted, marginTop: 2 },
});
