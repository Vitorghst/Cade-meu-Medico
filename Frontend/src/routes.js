import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Index from './pages/Index';
import EsqueceSenha from './pages/EsqueceSenha'
import Cadastro from './pages/Cadastro';
import Home from './pages/Home'

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Index,
    EsqueceSenha,
    Cadastro,
    Home
  })
);

export default Routes;