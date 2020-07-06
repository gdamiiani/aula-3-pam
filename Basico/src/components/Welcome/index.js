import PropTypes from 'prop-types'
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';

function Welcome(props) {
  const [message, setMessage] = useState('Entre aqui!');

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const [showInfo, setShowInfo] = useState(false);
  const [requestInfo, setRequestInfo] = useState(false);

  const { greeting } = props;

  function cleanInfo() {
    setName('');
    setLastName('');

    setShowInfo(false);
  }

  function displayInfo() {
    if (name == '' || lastName == '') {
      Alert.alert(
        'Preenchimento obrigatório',
        'Informe o nome e o sobrenome!',
        [
            { text: 'OK' },
        ],
      );
      return;
    }

    setMessage('Seja bem-vindo!');

    setRequestInfo(false);
    setShowInfo(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {showInfo && (
          <Text style={styles.headerText}>Olá {name} {lastName}!</Text>
        ) || requestInfo && (
          <Text style={styles.headerText}>Informe seus dados para continuar</Text>
        ) || (
          <Text style={styles.headerText}>Olá! {greeting}</Text>
        )}
      </View>

      {requestInfo && (
        <View style={styles.body}>
          <View style={styles.inputGroup}>
            <TextInput
              value={name}
              onChangeText={(name) => setName(name.charAt(0).toUpperCase() + name.slice(1))}
              placeholder="Nome"
              style={styles.input}
            />
            <TextInput
              value={lastName}
              onChangeText={(lastName) => setLastName(lastName.charAt(0).toUpperCase() + lastName.slice(1))}
              placeholder="Sobrenome"
              style={styles.input}
            />
          </View>

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => displayInfo()}
            >
              <Text style={styles.buttonText}>Confirmar</Text>
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
            <Text style={styles.buttonText}>{message}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

Welcome.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default Welcome;
