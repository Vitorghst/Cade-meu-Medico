import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, SafeAreaView, Image,  ScrollView, TouchableOpacity} from "react-native"; 
import { FontAwesome } from '@expo/vector-icons';
import { Button, Searchbar } from 'react-native-paper';
import { FontAwesome5, MaterialIcons, Ionicons, Fontisto, AntDesign, Entypo} from '@expo/vector-icons';

import doctor from '../assets/doctor.png'


   


export default function Doctor({ navigation }) {

    const [selectedValue, setSelectedValue] = useState("java");
  //   function logout() {
  //     localStorage.clear();
  //      api.get('logout').then(response => {
  //        console.log(response);
  //        navigation.navigate('Login');
  //      }).catch(err =>{
  //        console.log(err)
  //      });
       
     
  //  }
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.teste}>Doctor Detail</Text>
        <View style={styles.row}>
        <FontAwesome style={styles.icon} name="bell" size={24} color="black" />
        </View>
        <TouchableOpacity style={[styles.button, styles.backgroundButton]} onPress={()=>{navigation.navigate('Index')}}>
          <Text ><FontAwesome style={styles.iconarrow} name="arrow-left" size={20} color="grey" /></Text>
        </TouchableOpacity>  
        <View style={styles.screen}>
        <Image source={doctor} style={styles.image} />
        </View>
        <View>
        <Text style={styles.second}>Dr. Ulrike Herz&nbsp;<MaterialIcons name="verified" size={24} color="blue" /></Text>
        <Text style={styles.first}>General & Internal Medicine</Text>
        <Text style={styles.reviews}><Ionicons name="star" size={24} color="#edd30e" />4.9 (284 Reviews)</Text>
        </View>
        <View>
        </View>
       <View style={styles.row}>
       <View style={styles.grid}>
        <Text style={styles.fontdoctor}><AntDesign name="message1" size={20} color="white" />&nbsp;&nbsp;Contact doctor</Text>
       </View>
       <View style={styles.gridbar}>
       <Entypo style={styles.icon2} name="dots-three-vertical" size={24} color="grey" />
       </View>
       </View>
       <View>
        <Text style={styles.newgrid}>Stats</Text>
        <Text style={styles.firstgrid}><FontAwesome name="university" size={24} color="blue" />&nbsp;&nbsp;Studies at The University of Melbourne</Text>
        <Text style={styles.firstgrid}><Entypo name="graduation-cap" size={24} color="#edd30e" />&nbsp;&nbsp;Practicing at NYU Langone Hospitals</Text>
        <Text style={styles.firstgrid}><FontAwesome name="user" size={24} color="#0ff702" />&nbsp;&nbsp;324 of Happy Patients</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.newgrid}>Reviews(284)</Text>
        <Text style={styles.viewAll}>View All</Text>
        </View>
        <View style={styles.grid2}>
        <Text style={styles.font2}>Book an appointment</Text>
       </View>
      </ScrollView>
      </SafeAreaView>
      
     
    
     
  );
}
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundButton: {
    backgroundColor: "white",
    borderColor: 'transparent',
    elevation: 20,
    shadowColor: 'black',
  },
  button: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 14,
    height: 45,
    width: '11%',
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 1500
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 0,
  },
  icon2: {
    marginLeft: 8,
    marginTop: 8,
  },
  icondoctor: {
    marginLeft: 10,
    marginTop: 30,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen2: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    paddingLeft: 10,
    height: 150,
    borderRadius: 1000,
  },
  viewAll: {
    marginTop: 30,
    marginLeft: 200,
    color: 'blue',
  },
  font: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
    marginBottom: 20,
    marginLeft: 10
  },
  font2: {
    color: 'white',
    fontSize: 15,
    marginLeft: 95,
    marginRight: 5,
    marginTop: 16
  },
  font3: {
    color: 'white',
    fontSize: 20,
    marginLeft: 6,
    marginRight: 10
  },
  fontdoctor: {
    color: 'white',
    fontSize: 15,
    marginLeft: 70,
    marginRight: 5,
    marginTop: 15
  },
  font4: {
    color: 'black',
    fontSize: 20,
    marginLeft: 12,
    marginRight: 10
  },
  
  input: {
   marginTop: -10,
   backgroundColor: 'white',
   marginBottom: 10,
   marginTop: 50,
   marginLeft: 20,
   marginRight: 30,
   fontSize: 12,
   height: 45,
   borderRadius: 5,
   borderBottomWidth: 0
  },
  grid: {
    backgroundColor: 'black',
    elevation: 20,
    shadowColor: 'black',
    color: 'white',
    marginTop: 30,
    width: 279,
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    borderBottomWidth: 0
  },
  gridbar: {
    backgroundColor: 'white',
    elevation: 20,
    shadowColor: 'black',
    color: 'white',
    marginTop: 30,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    width: 60,
    height: 60,
    marginRight: 50,
    borderRadius: 5,
    borderBottomWidth: 0

  },
  grid2: {
    backgroundColor: '#10a2e6',
    elevation: 20,
    shadowColor: 'black',
    color: 'white',
    marginTop: 15,
    width: 350,
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    borderBottomWidth: 0
  },
  gridsecond: {
    backgroundColor: '#10a2e6',
    elevation: 20,
    shadowColor: 'black',
    color: 'white',
    marginTop: 30,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    width: 170,
    height: 300,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    borderBottomWidth: 0
  },
  gridspecialist: {
    backgroundColor: 'white',
    elevation: 20,
    shadowColor: 'black',
    color: 'white',
    marginTop: 30,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    width: 170,
    height: 300,
    marginRight: 50,
    borderRadius: 5,
    borderBottomWidth: 0
  },
  first: {
   marginTop: 15,
   marginLeft: 9,
   textAlign: 'center',
   color: 'grey'

  },
  firstgrid: {
    marginTop: 15,
    marginLeft: 20,
    color: 'grey',
    justifyContent: 'space-between'
 
   },
  second: {
   marginTop: 30,
   marginLeft: 9,
   fontSize: 30,
   textAlign: 'center',
   color: 'black'
  },
  reviews: {
    marginTop: 30,
    marginLeft: 9,
    fontSize: 15,
    textAlign: 'center',
    color: 'black'
   },
  newgrid: {
    marginTop: 30,
    marginLeft: 20,
    color: 'grey',
   },
  background: {
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  teste: {
    marginTop: 50,
    color: 'black',
    textAlign: 'center'
  },
  select: {
    height: 45,
    width: 210, 
    fontWeight: 'bold',
    borderBottomWidth: 0
  },
  row: {
    flexDirection:"row",
    marginTop: -5,
  },
  row2: {
    flexDirection:"row",
    marginTop: -5,
    
  },
  icon: {
    marginLeft: 350,
    color: 'grey'
  },
  carouselItemContainer: {
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 20,
    shadowColor: 'black',
    height: 40,
    marginLeft: 40,
    marginBottom: 40,
    marginTop: 40
  },
  carouselItemImage: {
    width: '9%',
    height: 23,
    marginTop: 13,
    marginLeft: 5,
    borderRadius: 4,
  },
  carouselItemTitle: {
    fontSize: 13,
    marginTop: 15,
    marginLeft: 5,
    fontWeight: 'bold',
    color: 'black',
  },

  });
  
  
  
    
  
  
