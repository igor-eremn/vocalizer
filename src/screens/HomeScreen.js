import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Component1 from '../components/SpeechToText';
import Component2 from '../components/TextToSpeech';

const HomeScreen = () => {
  const [activeComponent, setActiveComponent] = useState('Component1');
  const [message, setMessage] = useState(''); // State to hold the message

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Component1':
        return <Component1 message={message} setMessage={setMessage} />;
      case 'Component2':
        return <Component2 message={message} />;
      default:
        return <Text style={styles.componentText}>Select a component by pressing a button</Text>;
    }
  };

  useEffect(() => {
    if(activeComponent === 'Component1') {
      setMessage('');
    }
  }, [activeComponent]);

  return (
    <SafeAreaView style={styles.container}>
      {/* App Name at the top */}
      <Text style={styles.appName}>Vocalizer</Text>

      {/* Dynamic Window to Show Components */}
      <View style={styles.dynamicComponentContainer}>
        {renderComponent()}
      </View>

      {/* Two buttons at the bottom */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setActiveComponent('Component1')}>
          <Text style={styles.buttonText}>Speech to Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setActiveComponent('Component2')}>
          <Text style={styles.buttonText}>Text to Speech</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#000000',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#ffffff',
  },
  dynamicComponentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 10,
    padding: 5,
    width: '100%',
  },
  componentText: {
    fontSize: 24,
    color: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  button: {
    flex: 1,
    backgroundColor: '#333333',
    padding: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
