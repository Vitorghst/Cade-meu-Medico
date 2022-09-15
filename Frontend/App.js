import { NavigationContainer } from "@react-navigation/native";
import { View, Picker, StyleSheet, Text, SafeAreaView, Image,  ScrollView} from "react-native"; 
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from "react";
import Routes from './src/routes';



export default function App() {
  return (
    <NavigationContainer>
    <Routes />
    </NavigationContainer>
  
  )
 }
 
 