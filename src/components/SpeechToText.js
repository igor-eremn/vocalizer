import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

const SpeechToText = ({ message, setMessage }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.headerText}>This is Speech To Text Component</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Type your message"
          placeholderTextColor="#888"
          value={message}
          onChangeText={setMessage}
          multiline
        />
      </View>
    </TouchableWithoutFeedback>
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
  headerText: {
    fontSize: 19,
    color: '#ffffff',
    marginBottom: 20,
    position: 'absolute',
    top: 20,
  },
  input: {
    position: 'absolute',
    top: 250,
    height: 100,
    width: '90%',
    borderColor: '#ffffff',
    borderWidth: 1,
    padding: 10,
    color: '#ffffff',
    borderRadius: 5,
    fontSize: 18,
    textAlignVertical: 'top', // Ensures text starts at the top in multiline
  },
});

export default SpeechToText;
