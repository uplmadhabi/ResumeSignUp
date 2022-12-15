import React, {useState} from 'react';

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
  TouchableOpacity
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

const SignIn = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
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
          <Text style={styles.CA}>Welcome Back</Text>
          <Text style={styles.CV}>Welcome Back Please Enter Your Details.</Text>
        </View>

        <View style={styles.textInputView}>
          <TextInput style={styles.textInput} placeholder={'Email'} />
        </View>

        <View style={styles.textInputView}>
          <TextInput style={styles.textInput} placeholder={'Password'} />
          <Text style={styles.hide}>Hide</Text>
        </View>

        <View style={styles.agreeView}>
          <CheckBox
            disabled={false}
            value={isSelected}
            onValueChange={newValue => setSelection(newValue)}
          />

          <View style={styles.forgotPasswordView}>
            <Text style= {styles.remember}>Remember for 30 days         </Text>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </View>
        </View>
        <View style={styles.btn}>
          <Button title="Sign In" color="#272727" 
          onPress={()=> navigation.navigate('PersonalInfo')}/>
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
        <TouchableOpacity style ={styles.accountView}  onPress={()=>navigation.navigate('SignUp')}>
                      <Text> Don't have an account ? </Text>
          <Text style={styles.signUp}>Sign up</Text>
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
    marginTop: 120,
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
    fontSize: 15,
    marginTop: 10,
  },

  textInputView : {
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
    alignItems: 'center',
    height: '6%',
    width: '85%',
    marginTop: 5,
    marginBottom: 5,

    flexDirection: 'row',
  },
  forgotPasswordView: {
    flexDirection: 'row',
    marginLeft:1,
    fontSize:20
  },
  remember:{
    fontSize:13
  },
  forgotPassword: {
    fontSize: 13
  },
  btn: {
    height: '8%',
    width: '85%',
    marginTop:10
  },
  signGoogle: {
    padding: 7,
    height: '6%',
    width: '85%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#BDBDBD80',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  googleImage: {
    height: 30,
    width: 30,
  },

  accountView: {
    padding: 20,
    marginBottom: 60,
    flexDirection: 'row',
  },
  signUp: {
    color: 'red',
  },
});

export default SignIn;
