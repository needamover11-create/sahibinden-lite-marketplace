import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, radius } from '../theme/colors';

const MENU_ITEMS: { icon: keyof typeof MaterialCommunityIcons.glyphMap; label: string }[] = [
  { icon: 'format-list-bulleted', label: 'İlanlarım' },
  { icon: 'heart-outline', label: 'Favorilerim' },
  { icon: 'message-outline', label: 'Mesajlarım' },
  { icon: 'bell-outline', label: 'Bildirimler' },
  { icon: 'shield-check-outline', label: 'Güvenli Alışveriş' },
  { icon: 'cog-outline', label: 'Ayarlar' },
  { icon: 'help-circle-outline', label: 'Yardım Merkezi' },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>U</Text>
        </View>
        <View>
          <Text style={styles.name}>Misafir Kullanıcı</Text>
          <Text style={styles.email}>Hesabınıza giriş yapın</Text>
        </View>
      </View>

      <View style={styles.menu}>
        {MENU_ITEMS.map((item) => (
          <Pressable key={item.label} style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <MaterialCommunityIcons name={item.icon} size={20} color={colors.navy} />
              <Text style={styles.menuLabel}>{item.label}</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={20} color={colors.textMuted} />
          </Pressable>
        ))}
      </View>

      <Text style={styles.version}>Sahibinden Lite v1.0.0</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg, paddingHorizontal: 18 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 14, marginTop: 18, marginBottom: 24 },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.navy,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: colors.white, fontSize: 22, fontWeight: '700' },
  name: { fontSize: 17, fontWeight: '700', color: colors.text },
  email: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
  menu: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  menuLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  menuLabel: { fontSize: 14, color: colors.text, fontWeight: '500' },
  version: { textAlign: 'center', color: colors.textMuted, fontSize: 11, marginTop: 24 },
});
