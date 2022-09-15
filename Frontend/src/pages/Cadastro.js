import React, { useState,} from "react";
import { ScrollView, SafeAreaView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import logo from '../assets/logo.png';


export default function Cadastro({ navigation }) {
  const [ nome, setNome ] = useState('');
  const [ sobrenome, setSobrenome ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ cpf, setCpf ] = useState('');
  const [ datadenac, setDatadenasc ] = useState('');
  const [ sexo, setSexo ] = useState('');
  const [ password, setPassword ] = useState('');


  function cadatrarUsuario(){
    if (email === 'vitorjose98@hotmail.com') {
      if (password === 'vitorjose123') {
        navigation.navigate('Login')
        alert('Cadastrado')
     }
  }
}
  function Voltar(){
    
  }
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nome</Text>
          <TextInput style={styles.input}
            keyboardType="default"
            placeholder="Nome"
            placeholderTextColor="#999"
            autoCapitalize='none'
            onChangeText={setNome}
            autoCorrect={false}
          ></TextInput>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Sobrenome</Text>
          <TextInput style={styles.input}
            keyboardType="default"
            placeholder="Sobrenome"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={setSobrenome}
          ></TextInput>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input}
            keyboardType="email-address"
            placeholder="E-mail"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={setEmail}
          ></TextInput>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>CPF</Text>
          <TextInput style={styles.input}
            keyboardType="default"
            placeholder="CPF"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            required={true}
            onChangeText={setCpf}
          ></TextInput>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Data de Nascimento</Text>
          <TextInput style={styles.input}
            keyboardType="default"
            placeholder="Data de Nascimento"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={setDatadenasc}
          ></TextInput>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Sexo</Text>
          <TextInput style={styles.input}
            keyboardType="default"
            placeholder="Sexo"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={setSexo}
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
        
        <TouchableOpacity style={[styles.button, styles.backgroundButton]}>
          <Text style={styles.text} onPress={cadatrarUsuario}>Cadastrar-se</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.backgroundButton ]}
         onPress={()=>{navigation.navigate('Login')}}>
          <Text style={styles.text}>Voltar</Text>
        </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
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
    marginLeft: 140,
    marginTop: 50,
    marginBottom: 40,
  },
  formGroup: {
    width: '100%',
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
    marginLeft: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 14,
    height: 55,
    width: '90%',
    borderRadius: 5
  },
  button: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 20,
    marginBottom: 10,
    marginLeft: 50,
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
  },
  scrollView: {
    backgroundColor: 'white',
    backgroundColor: '#0E5CBB',
    marginHorizontal: 0,
  },
});
