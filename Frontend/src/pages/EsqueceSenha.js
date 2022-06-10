import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import logo from '../assets/logo.png';

export default function EsqueceSenha({ navigation }) {
  const [ email, setEmail ] = useState('');

  function esqueceuSenha(){
    if (email === 'vitorjose98@hotmail.com') {
        navigation.navigate('Login')
        alert('Foi enviado o email para redefinir a senha!')
      } else {
        alert('email não encontrado!')
      }
 }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0E5CBB', '#2E75E7']}
        style={styles.background}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input}
            keyboardType="default"
            placeholder="Digite seu Email:"
            placeholderTextColor="#999"
            autoCapitalize='none'
            onChangeText={setEmail}
            autoCorrect={false}
          ></TextInput>
        </View>
        <TouchableOpacity style={[styles.button, styles.backgroundButton]}>
          <Text style={styles.text} onPress={esqueceuSenha}>Redefinir Senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={()=>{navigation.navigate('Login')}}>
          <Text style={styles.text}>Voltar</Text>
        </TouchableOpacity >
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  formGroup: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  label: {
    color: '#fff',
    fontSize: 10,
    backgroundColor: "#4DCFE0",
    paddingHorizontal: 15,
    paddingVertical: 0,
    lineHeight: 20,
    borderRadius: 5,
    zIndex: 10,
    marginLeft: 10,
  },
  input: {
    marginTop: -10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 14,
    height: 45,
    width: '100%',
    borderRadius: 5
  },
  button: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 14,
    height: 45,
    width: '70%',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  backgroundButton: {
    backgroundColor: "#4DCFE0",
    borderColor: 'transparent',
    marginTop: 30,
  },
  text: {
    backgroundColor: 'transparent',
    color: '#fff',
  },
  esqueci: {
    position: 'absolute',
    bottom: 10,
  }
});
