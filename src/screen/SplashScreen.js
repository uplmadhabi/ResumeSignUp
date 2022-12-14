import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet,Image} from 'react-native';

const SplashScreen = ({ navigation }) => {


  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignUp')
    }, 5000);
  });


  return (
    <View>
       <Image source = {require("../../assets/RBLogo.png")} style = {styles.logo}/>
    </View>
)
}

const styles = StyleSheet.create({
  logo:{
    marginTop:350,
    height:50,
    width:160,
    alignSelf:"center"
  },
})
export default SplashScreen;


