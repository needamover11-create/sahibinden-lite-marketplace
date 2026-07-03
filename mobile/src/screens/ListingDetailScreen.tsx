import React from 'react';
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, radius } from '../theme/colors';
import { listings } from '../data/listings';
import { formatPrice } from '../utils/format';
import { useFavorites } from '../context/FavoritesContext';
import { RootStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;
type DetailRoute = RouteProp<RootStackParamList, 'ListingDetail'>;

export default function ListingDetailScreen() {
  const navigation = useNavigation<Nav>();
  const route = useRoute<DetailRoute>();
  const { isFavorite, toggleFavorite } = useFavorites();

  const listing = listings.find((l) => l.id === route.params.id);
  if (!listing) return null;
  const favorite = isFavorite(listing.id);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} hitSlop={10}>
          <MaterialCommunityIcons name="arrow-left" size={22} color={colors.navy} />
        </Pressable>
        <Pressable onPress={() => toggleFavorite(listing.id)} hitSlop={10}>
          <MaterialCommunityIcons
            name={favorite ? 'heart' : 'heart-outline'}
            size={22}
            color={favorite ? colors.danger : colors.navy}
          />
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.imageWrap}>
          <Text style={styles.emoji}>{listing.emoji}</Text>
        </View>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>{formatPrice(listing.price)}</Text>

        <View style={styles.metaRow}>
          <MaterialCommunityIcons name="map-marker-outline" size={16} color={colors.textMuted} />
          <Text style={styles.metaText}>{listing.location}</Text>
          <Text style={styles.dot}>·</Text>
          <Text style={styles.metaText}>{listing.postedAt}</Text>
        </View>

        <View style={styles.sellerCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{listing.seller.charAt(0)}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.sellerName}>{listing.seller}</Text>
            <Text style={styles.sellerRole}>İlan Sahibi</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Açıklama</Text>
        <Text style={styles.description}>{listing.description}</Text>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable
          style={styles.messageBtn}
          onPress={() => Alert.alert('Mesaj Gönder', `${listing.seller} kullanıcısına mesajınız iletildi.`)}
        >
          <MaterialCommunityIcons name="message-text-outline" size={18} color={colors.navy} />
          <Text style={styles.messageBtnText}>Mesaj Gönder</Text>
        </Pressable>
        <Pressable
          style={styles.callBtn}
          onPress={() => Alert.alert('Ara', `${listing.seller} aranıyor...`)}
        >
          <MaterialCommunityIcons name="phone-outline" size={18} color={colors.white} />
          <Text style={styles.callBtnText}>Ara</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  content: { paddingHorizontal: 18, paddingBottom: 24 },
  imageWrap: {
    height: 200,
    backgroundColor: colors.goldSoft,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  emoji: { fontSize: 80 },
  title: { fontSize: 20, fontWeight: '700', color: colors.text },
  price: { fontSize: 24, fontWeight: '800', color: colors.navy, marginTop: 8 },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 10 },
  metaText: { fontSize: 13, color: colors.textMuted },
  dot: { color: colors.textMuted, marginHorizontal: 2 },
  sellerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
    marginTop: 20,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.navy,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: colors.white, fontWeight: '700', fontSize: 16 },
  sellerName: { fontSize: 14, fontWeight: '700', color: colors.text },
  sellerRole: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: colors.text, marginTop: 22, marginBottom: 8 },
  description: { fontSize: 14, color: colors.textMuted, lineHeight: 21 },
  footer: {
    flexDirection: 'row',
    gap: 10,
    padding: 16,
    borderTopWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  messageBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: colors.navy,
    borderRadius: radius.md,
    paddingVertical: 12,
  },
  messageBtnText: { color: colors.navy, fontWeight: '700', fontSize: 14 },
  callBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: colors.navy,
    borderRadius: radius.md,
    paddingVertical: 12,
  },
  callBtnText: { color: colors.white, fontWeight: '700', fontSize: 14 },
});
