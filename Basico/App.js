import React, { Component } from 'react';
import { View } from 'react-native';

import Calculus from './src/components/Calculus';
import Welcome from './src/components/Welcome';

import styles from './styles';

function App() {
  return (
    <View style={styles.container}>
      <Welcome greeting="Primeira vez aqui?" />
      <Calculus />
    </View>
  );
}

export default App;
