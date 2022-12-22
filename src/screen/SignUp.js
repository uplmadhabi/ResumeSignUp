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
  ToastAndroid,
  BackHandler,
  Alert,
  
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import { useSelector, useDispatch } from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';



const SignUp = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");

  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      };

     
      BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => {
       
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onBackPress
        );
      };
    }, []),
  );

  const doSignUp = async () => {
    console.log("email:",email)
    console.log("password:",password)
    var signUpBody = {
      name:name,
      email: email,
      password: password,
    }
    console.log(signUpBody)
    try {
      const response = await fetch('https://dev.api.resumebuilder.underscoretec.com/api/users/login',
      
      
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(signUpBody)
        })

      const json = await response.json();
      console.log("sadfghj:",json);
      if (json.error == false) {
        console.log(JSON.stringify(json));
        // ToastAndroid.show(json.message, ToastAndroid.SHORT);
        // dispatch({
        //   type: "LOGIN_SUCCESS",
        //   payload: json.result
        // })
        navigation.navigate('PersonalInfo')
      } 
      else {
        ToastAndroid.show(json.message, ToastAndroid.SHORT);
      }

    
   } catch (error) {
      console.error(error);

    }
  }



  return (
    <ScrollView>
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/RBLogo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.CAView}>
        <Text style={styles.CA}>Create Account</Text>
        <Text style={styles.CV}>Create Your CV Builder Account</Text>
      </View>
      <View style={styles.nameView}>
        <TextInput style={styles.textInput} placeholder={'Name'} />
      </View>
      <View style={styles.textInputView}>
        <TextInput style={styles.textInput} placeholder={'Email'} />
      </View>

      <View style={styles.textInputView}>
        <TextInput style={styles.textInput} placeholder={'Password'} />
        <Text style={styles.hide}>Hide</Text>
      </View>
      <View style={styles.textInputView}>
        <TextInput style={styles.textInput} placeholder={'Confirm Password'} />
        <Text style={styles.hide}>Hide</Text>
      </View>

      <View style={styles.agreeView}>
      <CheckBox
    disabled={false}
    value={isSelected}
    onValueChange={(newValue) => setSelection(newValue)}
  />
       
      
      <View style={styles.agreePolicyView}>
        <Text >I agree to all </Text>
        <Text style={styles.privacyPolicy}>Terms, Privacy Policy</Text>
      </View>
      </View>
      <View style={styles.btn}>
        <Button title="Sign Up" color="#272727"
        
          onPress={()=>{
            doSignUp()

            
          }}

         
       
         />
      </View>
      <View style={styles.signGoogle}>
        <View style={styles.googleView}>
        <Image
          source={require('../../assets/GoogleIcon.png')}
          style={styles.googleImage}
        />
        </View>
        <View style={styles.googleText}>
        <Text>Sign in with Google</Text>
      </View>
      </View>
      <TouchableOpacity style ={styles.accountView}
        onPress={()=>
        navigation.navigate('SignIn')
        }>
        <Text> Don't have an account ? </Text>
        <Text style ={ styles.signUp}>Sign In</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
  
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 60,
    height: 50,
    width: 160,
  },
  CAView: {
    alignItems: 'center',
    marginTop: 20,
  },
  CA: {
    fontSize: 25,
    marginLeft: 10,
  },
  CV: {
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 10,
  },
  nameView: {
    height: '6%',
    width: '85%',
     marginTop: 40,
    backgroundColor: '#D3D3D3',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  textInputView: {
    height: '6%',
    width: '85%',
    marginTop: 28,
    backgroundColor: '#D3D3D3',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  textInput: {
     flex: 1,
    padding: 10,
  },
  hide: {
    alignSelf: 'center',
    right: 8,
  },
  rectangle: {
    height: 16,
    width: 16,
},
  agreeView: {
    alignItems:"center",
    height: '6%',
    width: '85%',
    marginTop: 5,
    marginBottom:5,
   
    flexDirection: 'row',
  },
  agreePolicyView: {
    flexDirection:"row",
     marginLeft:10
  },
  privacyPolicy: {
    color: 'red',
  },
  btn: {
    height: '8%',
    width: '85%',
  },
  signGoogle: {
    padding: 7,
    height: '6%',
    width: '85%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#BDBDBD80',
    borderRadius: 5,
    alignItems:"center",
    justifyContent:"center",

  },
  
  googleImage: {
    height: 30,
    width: 30,
  },

  accountView:{
   
  padding:10,
  marginBottom:60,
    flexDirection:"row"
  },
  signUp:{
    color:"red"
  },
});

export default SignUp;
