import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const SpeechToText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Speech To Text Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    padding: 10,
  },
  text: {
    fontSize: 24,
    color: '#ffffff',
  },
});

export default SpeechToText;
