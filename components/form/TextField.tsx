import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

interface Props {
  title?: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  editable?: boolean;
  multiline?: boolean;
}

export default function TextField(props: Props): JSX.Element {
  const {
    title,
    onChange,
    placeholder,
    value,
    editable,
    multiline,
  } = props;

  const handleChange = useCallback(() => {
    onChange(value);
  }, [onChange]);

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={[
          styles.input,
          multiline && styles.multiline,
        ]}
        onChangeText={handleChange}
        value={value ?? ''}
        placeholder={placeholder}
        editable={editable}
        multiline={multiline}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },
});
