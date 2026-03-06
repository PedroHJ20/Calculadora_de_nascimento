import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Criando os estados para armazenar os dados digitados
  const [idade, setIdade] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [anoNascimento, setAnoNascimento] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.header}>Calculadora de Nascimento</Text>
        {/* Os inputs entrarão aqui no próximo commit */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
});