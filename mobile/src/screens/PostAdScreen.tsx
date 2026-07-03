import React, { useState } from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, radius } from '../theme/colors';
import { categories } from '../data/categories';
import { CategoryId } from '../types';

export default function PostAdScreen() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<CategoryId | null>(null);

  const canSubmit = title.trim() && price.trim() && location.trim() && category;

  const handleSubmit = () => {
    if (!canSubmit) {
      Alert.alert('Eksik bilgi', 'Lütfen tüm alanları doldurun ve bir kategori seçin.');
      return;
    }
    Alert.alert('İlan Gönderildi', 'İlanınız incelendikten sonra yayınlanacaktır.', [
      {
        text: 'Tamam',
        onPress: () => {
          setTitle('');
          setPrice('');
          setLocation('');
          setDescription('');
          setCategory(null);
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.header}>İlan Ver</Text>
        <Text style={styles.subheader}>Ürününüzü saniyeler içinde binlerce kişiyle paylaşın.</Text>

        <Text style={styles.label}>Kategori</Text>
        <View style={styles.categoryRow}>
          {categories.map((c) => (
            <Pressable
              key={c.id}
              style={[styles.categoryChip, category === c.id && styles.categoryChipActive]}
              onPress={() => setCategory(c.id)}
            >
              <MaterialCommunityIcons
                name={c.icon as any}
                size={14}
                color={category === c.id ? colors.white : c.color}
              />
              <Text style={[styles.categoryChipText, category === c.id && styles.categoryChipTextActive]}>
                {c.title}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.label}>İlan Başlığı</Text>
        <TextInput
          style={styles.input}
          placeholder="Örn. 2021 Model Toyota Corolla"
          placeholderTextColor={colors.textMuted}
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Fiyat (₺)</Text>
        <TextInput
          style={styles.input}
          placeholder="Örn. 25000"
          placeholderTextColor={colors.textMuted}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Konum</Text>
        <TextInput
          style={styles.input}
          placeholder="Örn. Kadıköy, İstanbul"
          placeholderTextColor={colors.textMuted}
          value={location}
          onChangeText={setLocation}
        />

        <Text style={styles.label}>Açıklama</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Ürününüz hakkında detaylı bilgi verin"
          placeholderTextColor={colors.textMuted}
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={5}
        />

        <Pressable style={styles.submitBtn} onPress={handleSubmit}>
          <MaterialCommunityIcons name="check-circle-outline" size={18} color={colors.white} />
          <Text style={styles.submitText}>İlanı Yayınla</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  content: { padding: 18, paddingBottom: 40 },
  header: { fontSize: 22, fontWeight: '800', color: colors.navy },
  subheader: { fontSize: 13, color: colors.textMuted, marginTop: 4, marginBottom: 18 },
  label: { fontSize: 13, fontWeight: '600', color: colors.text, marginTop: 14, marginBottom: 6 },
  input: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: colors.text,
  },
  textArea: { height: 110, textAlignVertical: 'top' },
  categoryRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  categoryChipActive: { backgroundColor: colors.navy, borderColor: colors.navy },
  categoryChipText: { fontSize: 12, fontWeight: '600', color: colors.text },
  categoryChipTextActive: { color: colors.white },
  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.navy,
    borderRadius: radius.md,
    paddingVertical: 14,
    marginTop: 26,
  },
  submitText: { color: colors.white, fontWeight: '700', fontSize: 15 },
});
