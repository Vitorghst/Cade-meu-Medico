import * as React from 'react';
import * as Battery from 'expo-battery';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { Entypo, Feather, AntDesign, Fontisto } from '@expo/vector-icons';



<<<<<<< HEAD

export default class App extends React.Component {
  state = {
    batteryLevel: null,

  };

  navigation = () => {
    this.props.navigation.navigate('Index')
  }

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  async _subscribe() {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    this.setState({ batteryLevel });
    this._subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      this.setState({ batteryLevel });
      console.log('batteryLevel changed!', batteryLevel);
    });
=======

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
>>>>>>> 68f5f80c7ef5cfedd4482d3dfbf020f83aea52e0
  }

  _unsubscribe() {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
                  style={{
                    marginBottom: 50,
                  }}
                  onPress={()=>this.navigation()}
                  >
                  <AntDesign name="camera" size={50} color="black" />
                </TouchableOpacity>
        <Text style={styles.paragraph}>

<<<<<<< HEAD
          {this.state.batteryLevel ? ` ${Math.round(this.state.batteryLevel * 100)}%` : 'Battery Level: Unknown'}
        </Text>
        <View style={styles.battery}>
          <View style={styles.batteryLevel}>
            <View style={{ backgroundColor: this.state.batteryLevel > 0.5 ? 'green' : this.state.batteryLevel > 0.2 ? 'orange' : 'red', width: `${this.state.batteryLevel * 100}%`, height: 30, }}></View>
            <View style={styles.batteryicon}>
            </View>
          </View>
        </View>
      </View>

    );
  }
=======
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
>>>>>>> 68f5f80c7ef5cfedd4482d3dfbf020f83aea52e0
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  // de acordo com o nível da bateria, a cor de fundo muda
  battery: {
    width: 100,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryLevel: {
    width: 80,
    height: 30,
    backgroundColor: '#fff',
  },

  batteryicon: {
    width: 15,
    height: 20,
    marginLeft: 90,
    marginTop: -24,
    marginRight: 0,
    borderRadius: 5,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    color: '#4DCFE0',
    fontSize: 100
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

}
);

