import React, { Component, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Calculus() {
  const [requestInfo, setRequestInfo] = useState(false);
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('Informe os dois números');

  function cleanInfo() {
    setNumber1('');
    setNumber2('');
    setResult('Informe os dois números');
  }

  function sum() {
    const aux = Number(number1) + Number(number2);

    if (number1 != '' && number2 != '' && !isNaN(aux)) {
      setResult(aux);
    } else if (isNaN(aux)) {
      setResult('Digite dois números válidos!');
    }
  }

  return (
    <View style={styles.container}>
      {requestInfo && (
        <View style={styles.body}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Somar</Text>
          </View>

          <View style={styles.inputGroup}>
            <TextInput
              value={number1}
              onChangeText={(number1) => setNumber1(number1)}
              placeholder="Número 1"
              style={styles.input}
            />
            <TextInput
              value={number2}
              onChangeText={(number2) => setNumber2(number2)}
              placeholder="Número 2"
              style={styles.input}
            />
          </View>

          <Text style={styles.result}>{(!isNaN(result) && `${number1} + ${number2} = `)}{result}</Text>

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => sum()}
            >
              <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cleanButton}
              onPress={() => cleanInfo()}
            >
              <Text style={styles.cleanButtonText}>Limpar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) || (
        <View style={styles.body}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setRequestInfo(true)}
          >
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default Calculus;
