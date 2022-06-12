import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import api from '../services/api'

import logo from '../assets/logo.png';
import EsqueceSenha from "./EsqueceSenha";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('pedro.vonrueden@example.com');
  const [password, setPassword] = useState('password');


  // COMENTEI POIS ESTÁ DANDO ERRO NO MEU LARAGON HERICSON, DEPOIS PRECISO VER COM VOCÊ, OBRIGADO!

  // useState(()=>{
  //   const token = localStorage.getItem('token');
  //   if(token !== null){
  //     navigation.navigate('Index')
  //   }
  // }, [localStorage]);
  

  // function singin() {
  //   api.post('login', {
  //     email: email,
  //     password: password
  //   }).then( async response => {
  //     console.log(response.data);
  //     const token = response.data.access_token;
  //     localStorage.setItem('token', token);
  //     //api.headers.Authorization = `Bearer ${token}`
  //     navigation.navigate('Index')
  //   }).catch(err => {
  //     console.log(err)
  //     alert('Usuario ou senha incorretos');
  //   });
  // }
  function Logar() {
    navigation.navigate('Index')
  }
  function esqSenha() {
    navigation.navigate('EsqueceSenha')
  }

  function Cadastrar() {
    navigation.navigate('Cadastro')
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0E5CBB', '#2E75E7']}
        style={styles.background}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.formGroup}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input}
            keyboardType="email-address"
            placeholder="E-mail"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={setEmail}
            required={true}
          ></TextInput>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input}
            secureTextEntry={true}
            keyboardType="visible-password"
            placeholder="Digite sua Senha:"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={setPassword}
          ></TextInput>
        </View>

        <TouchableOpacity style={[styles.button, styles.backgroundButton]}
          onPress={Logar}>
          <Text style={styles.text}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={Cadastrar}>
          <Text style={styles.text}>Faça seu cadastro!</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.esqueci}
          onPress={esqSenha}>
          <Text style={styles.text}>Esqueci minha senha</Text>
        </TouchableOpacity>
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
