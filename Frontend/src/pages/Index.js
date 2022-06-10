import React, {useState} from "react";
import { View , Text, StyleSheet, Touchable, TouchableOpacity} from "react-native";
import api from "../services/api";

export default function Index({ navigation }) {
  
    
  function logout() {
     localStorage.clear();
      api.get('logout').then(response => {
        console.log(response);
        navigation.navigate('Login');
      }).catch(err =>{
        console.log(err)
      });
      
    
  }
  
  return (<View style={styles.container}>
    <Text>Index</Text>
    <TouchableOpacity onPress={logout}>
      <Text>Deslogar</Text>
    </TouchableOpacity>
  </View>
   
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
