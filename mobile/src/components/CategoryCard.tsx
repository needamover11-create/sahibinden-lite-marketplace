import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Category } from '../types';
import { colors, radius } from '../theme/colors';

interface Props {
  category: Category;
  onPress: () => void;
}

export default function CategoryCard({ category, onPress }: Props) {
  return (
    <Pressable style={styles.wrap} onPress={onPress}>
      <View style={[styles.iconWrap, { backgroundColor: `${category.color}1A` }]}>
        <MaterialCommunityIcons name={category.icon as any} size={24} color={category.color} />
      </View>
      <Text style={styles.title}>{category.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: { width: '31%', alignItems: 'center', marginBottom: 16 },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  title: { fontSize: 12, color: colors.text, fontWeight: '600', textAlign: 'center' },
});
