import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export default function Section({children, title}: SectionProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>
        {title}
      </Text>
      <View style={styles.sectionContent}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionContent: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});