import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Welcome from './src/components/Welcome';

import styles from './styles';

function App() {
  return (
    <View style={styles.container}>
      <Welcome greeting="Primeira vez aqui?" />
    </View>
  );
}

export default App;
