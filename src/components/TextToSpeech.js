import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';

const TextToSpeech = ({ message }) => {
  const [messageNew, setMessageNew] = useState(message);
  const [selectedVoice, setSelectedVoice] = useState(null);

  const voices = [
    { name: "Daniel",               voiceURI: "com.apple.ttsbundle.Daniel-compact",     lang: "en-GB", localService: true, "default": true },
    { name: "Samantha (Enhanced)",  voiceURI: "com.apple.ttsbundle.Samantha-premium",   lang: "en-US", localService: true, "default": true },
    { name: "Ting-Ting",            voiceURI: "com.apple.ttsbundle.Ting-Ting-compact",  lang: "zh-CN", localService: true, "default": true },
    { name: "Mei-Jia",              voiceURI: "com.apple.ttsbundle.Mei-Jia-compact",    lang: "zh-TW", localService: true, "default": true }
  ];

  if (selectedVoice === null && voices.length > 0) {
    setSelectedVoice(voices[0]);
  }

  const speak = () => {
    if (messageNew.trim()) {
      if (selectedVoice) {
        Speech.speak(messageNew, { voice: selectedVoice.voiceURI });
      } else {
        alert('No voice selected');
      }
    } else {
      alert('Please enter a message to speak');
    }
  };

  const clearInput = () => {
    setMessageNew('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.text}>This is Text To Speech Component</Text>

        <View style={styles.voiceContainer}>
          {voices.map((voice, index) => (
            <Pressable
              key={index}
              style={[
                styles.voiceCircle,
                selectedVoice && selectedVoice.voiceURI === voice.voiceURI && styles.selectedVoice
              ]}
              onPress={() => setSelectedVoice(voice)}
            >
              <Text style={styles.voiceText}>{voice.name[0]}</Text>
            </Pressable>
          ))}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Type a message"
          placeholderTextColor="#888"
          value={messageNew}
          multiline
          onChangeText={text => setMessageNew(text)}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={speak}>
            <Ionicons name="volume-high-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Speak</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={clearInput}>
            <Ionicons name="trash-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
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
  text: {
    fontSize: 19,
    color: '#ffffff',
    marginBottom: 20,
    position: 'absolute',
    top: 20,
  },
  voiceContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    position: 'absolute',
    top: 170,
  },
  voiceCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  selectedVoice: {
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  voiceText: {
    color: '#ffffff',
    fontSize: 20,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    position: 'absolute',
    top: 370,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default TextToSpeech;
