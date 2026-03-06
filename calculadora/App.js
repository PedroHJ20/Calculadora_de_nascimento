import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableWithoutFeedback, 
  Keyboard 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [idade, setIdade] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [anoNascimento, setAnoNascimento] = useState(null);

  // Observa as mudanças nos inputs e calcula automaticamente sem precisar de botão
  useEffect(() => {
    calcularAno();
  }, [idade, dia, mes]);

  const calcularAno = () => {
    const i = parseInt(idade);
    const d = parseInt(dia);
    const m = parseInt(mes);

    // Só realiza o cálculo se todos os campos tiverem números válidos digitados
    if (!isNaN(i) && !isNaN(d) && !isNaN(m)) {
      const dataAtual = new Date();
      const anoAtual = dataAtual.getFullYear();
      const mesAtual = dataAtual.getMonth() + 1; // getMonth() retorna de 0 a 11
      const diaAtual = dataAtual.getDate();

      let anoCalculado = anoAtual - i;

      // Lógica extra: Se a pessoa ainda não fez aniversário no ano atual, ela nasceu um ano antes
      if (m > mesAtual || (m === mesAtual && d > diaAtual)) {
        anoCalculado -= 1;
      }

      setAnoNascimento(anoCalculado);
    } else {
      setAnoNascimento(null); // Limpa o resultado se o usuário apagar os dados
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Calculadora de Nascimento</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Sua Idade</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 21"
              keyboardType="numeric"
              value={idade}
              onChangeText={setIdade}
              maxLength={3}
            />

            <Text style={styles.label}>Dia de Nascimento</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 15"
              keyboardType="numeric"
              value={dia}
              onChangeText={setDia}
              maxLength={2}
            />

            <Text style={styles.label}>Mês de Nascimento</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 10"
              keyboardType="numeric"
              value={mes}
              onChangeText={setMes}
              maxLength={2}
            />
          </View>

          {anoNascimento && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultLabel}>Você nasceu no ano de:</Text>
              <Text style={styles.resultValue}>{anoNascimento}</Text>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
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
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    fontSize: 18,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#bbdefb',
  },
  resultLabel: {
    fontSize: 18,
    color: '#1565c0',
    marginBottom: 8,
  },
  resultValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1565c0',
  },
});