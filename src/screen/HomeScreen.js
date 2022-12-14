import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Text, View } from 'react-native';


const HomeScreen = ({ navigation }) => {

  const user = useSelector((store) => store.login.userData);
  console.log("USER:",user);

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('Login')
  //   }, 2000);
  // });


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>WELCOME {user.email}</Text>
    </View>



  )
}
export default HomeScreen;


