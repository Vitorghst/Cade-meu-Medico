import * as React from 'react';
import * as Battery from 'expo-battery';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { Entypo, Feather, AntDesign, Fontisto } from '@expo/vector-icons';




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

