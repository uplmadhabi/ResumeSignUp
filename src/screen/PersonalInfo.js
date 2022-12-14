import React,{useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  
} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';

const PersonalInfo =()=>{
    return(
        <ScrollView>
        <View style ={styles.container}>

        <View style = {styles.header}>

            <Text style={styles.fillText}>Please fill all the steps to complete your resume</Text>
            <View style={styles.infoView}>
                <Text style={styles.infoText}>Personal Information                                 </Text>
                <Text style={styles.stepText}>Step1/6</Text>
            <Text>djcxgvndnsgvcedbxjsr</Text>
            </View>
            {/* <View style={styles.progessbarView}>
                 
                <ProgressBar styleAttr="Horizontal" color="#CAD5D6" />
            </View> */}
        
        </View>
       
        </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
container:{
flex:1,
},
header:{
    backgroundColor:"#2F3044",
    height:"100%",
},
infoView:{
flexDirection:"row",
},
fillText:{
    color:"#FFFFFF",
    padding:"10%",

},
infoText:{
    color:"#FFFFFF",
    marginLeft:"10%",
},
stepText:{
    color:"#FFFFFF", 
},
progessbarView:{
    marginVertical: 24,
},
});
export default PersonalInfo;