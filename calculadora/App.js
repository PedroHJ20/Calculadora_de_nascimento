import React, { useState } from 'react';
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

export default function App() {
  const [idade, setIdade] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [anoNascimento, setAnoNascimento] = useState(null);

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
            <TextInput style={styles.input} placeholder="Ex: 21" keyboardType="numeric" value={idade} onChangeText={setIdade} maxLength={3} />

            <Text style={styles.label}>Dia de Nascimento</Text>
            <TextInput style={styles.input} placeholder="Ex: 15" keyboardType="numeric" value={dia} onChangeText={setDia} maxLength={2} />

            <Text style={styles.label}>Mês de Nascimento</Text>
            <TextInput style={styles.input} placeholder="Ex: 10" keyboardType="numeric" value={mes} onChangeText={setMes} maxLength={2} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  inner: { padding: 24, flex: 1, justifyContent: 'center' },
  header: { fontSize: 26, fontWeight: 'bold', marginBottom: 40, textAlign: 'center', color: '#333' },
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 8, color: '#555', fontWeight: '600' },
  input: { backgroundColor: '#fff', paddingHorizontal: 15, paddingVertical: 12, borderRadius: 8, borderWidth: 1, borderColor: '#ddd', marginBottom: 20, fontSize: 18 },
});