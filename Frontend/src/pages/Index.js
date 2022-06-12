import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, SafeAreaView, Image,  ScrollView, TouchableOpacity} from "react-native"; 
import { FontAwesome } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel'
import { FontAwesome5, MaterialIcons, Ionicons, Fontisto} from '@expo/vector-icons';




  const carouselItems = [
    {
      title: 'General Practitioner',
      image:
        'https://i.pinimg.com/originals/8f/29/79/8f29794f2a958c1ae1298291925a4da4.jpg',
    },
    {
      title: 'Internal Medicine',
      image:
        'https://cdn.iconscout.com/icon/free/png-256/pill-1919732-1620243.png',
    },
    {
      title: 'Pediatrician',
      image:
        'https://static.vecteezy.com/ti/vetor-gratis/p1/1932298-pacifier-baby-isolated-icon-vector-gr%C3%A1tis-vetor.jpg',
    },

   
  ];
  function renderItem({item}) {
    return (
      <View style={styles.carouselItemContainer}>
        <View style={styles.row}>
        <Image
          style={styles.carouselItemImage}
          source={{uri: `${item.image}`}}
        />
        <Text style={styles.carouselItemTitle}>{item.title}</Text>
        
        </View>
      </View>
    );
}



export default function Index({ navigation }) {

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
        <Text style={styles.teste}>Location</Text>
         <View style={styles.row}>
        <Picker
          selectedValue={selectedValue}
          style={styles.select}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Badung, Indonesia" value="Badung,Indonesia" />
          <Picker.Item label="Paraná, Brasil" value="Paraná, Brasil" />
        </Picker>
        <FontAwesome style={styles.icon} name="bell" size={24} color="black" />
        </View>
        <View>
        <Text style={styles.first}>Good morning, Vitor!</Text>
        <Text style={styles.second}>Find your doctor here</Text>
        </View>
        <View>
        <Searchbar style={styles.input}
        placeholder="Search a doctor"

       />
        <Carousel
          layout={'default'}
          layoutCardOffset={19}
          data={carouselItems}
          sliderWidth={350}
          itemWidth={300}
          renderItem={renderItem}
        />
        </View>
        <View style={styles.grid}>
        <View style={styles.row2}>
        <Text style={styles.font}>Remember to always regulary check up your health with us</Text>
        <View style={styles.screen}>
        <FontAwesome5 name="heartbeat" size={50} color="white" />
        </View>
        </View>
        <Text style={styles.font2}>#HealthWithUs</Text>
       </View>
       <View style={styles.row}>
       <View style={styles.gridsecond}>
        <Text style={styles.font3}>Consultation</Text>
        <MaterialIcons style={styles.icon2} name="chat" size={90} color="#0ff702" />
       </View>
       <View style={styles.gridspecialist}>
        <Text style={styles.font4}>Specialist</Text>
        <Ionicons style={styles.icon2} name="compass" size={90} color="#10a2e6" />
       </View>
       </View>
       <View style={styles.gridsafe}>
        <View style={styles.row2}>
        <View style={styles.screen}>
        <Fontisto style={styles.icondoctor} name="doctor" size={50} color="white" />
        </View>
        <Text style={styles.fontdoctor}>Consult with Doctor</Text>
        </View>
       </View>
      </ScrollView>
      </SafeAreaView>
      
     
    
     
  );
}
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 0,
  },
  icon2: {
    marginTop: 60,
    marginLeft: 30,
  },
  icondoctor: {
    marginTop: 2,
    marginLeft: 10,
  },
  screen: {
    justifyContent: "center",
    alignItems: "center",
  },
  screen2: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 60,
    paddingLeft: 10,
    height: 60,
    borderRadius: 1000,
  },
  font: {
    color: 'white',
    fontSize: 23,
    marginRight: 10
  },
  font2: {
    color: 'white',
    fontSize: 5,
  },
  font3: {
    color: 'white',
    fontSize: 20,
    marginLeft: 6,
    marginRight: 10
  },
  fontdoctor: {
    color: 'white',
    fontSize: 20,
    marginLeft: 52,
    marginTop: 15,
    marginRight: 10
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
    marginTop: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    marginLeft: 20,
    width: 360,
    height: 155,
    marginRight: 20,
    borderRadius: 5,
    borderBottomWidth: 0
  },
  gridsafe: {
    backgroundColor: 'red',
    elevation: 20,
    shadowColor: 'black',
    color: 'white',
    marginTop: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    marginLeft: 20,
    width: 360,
    height: 80,
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
   marginTop: 55,
   marginLeft: 9,
   color: 'grey'

  },
  second: {
   fontWeight: 'bold',
   fontSize: 30,
   marginLeft: 8,
  },
  background: {
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  teste: {
    marginLeft: 8,
    marginTop: 50,
    color: 'grey'
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
  },
  icon: {
    marginLeft: 150,
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
  
  
  
    
  
  
