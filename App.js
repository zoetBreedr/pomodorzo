import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { colours } from './src/utils/colours';
import { Focus } from './src/features/Focus';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.darkBlue,
  },
  text: {
    color: colours.white,
  }
});
