import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { Entypo, Feather, AntDesign} from '@expo/vector-icons'

import Login from './pages/Login';
import Index from './pages/Index';
import EsqueceSenha from './pages/EsqueceSenha'
import Cadastro from './pages/Cadastro';
import Home from './pages/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()


export default function Routes(){
  return(
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Login" component={Login} options={{tabBarIcon: ({size, color}) => (
        <Entypo name="home" size={size} color={color} />
      )
      }} />
      <Tab.Screen name="Cadastro" component={Cadastro} options={{tabBarIcon: ({size, color}) => (
        <Feather name="calendar" size={size} color={color} />
      )
      }} />
      <Tab.Screen name="Index" component={Index} options={{tabBarIcon: ({size, color}) => (
        <AntDesign name="message1" size={size} color={color} />
        
      )
     }} />
      <Tab.Screen name="Esquece Senha" component={EsqueceSenha} options={{tabBarIcon: ({size, color}) => (
        <Feather name="user" size={size} color={color} />
      )
     }} />
    </Tab.Navigator>
    
  )
}