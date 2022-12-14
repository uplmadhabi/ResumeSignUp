import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Button, SafeAreaView, StyleSheet, TextInput, ToastAndroid } from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();

  const doLogin = async () => {
    var loginBody = {
      email: email,
      password: password
    }
    console.log(loginBody)
    try {
      const response = await fetch('https://dev.api.resumebuilder.underscoretec.com/api/users/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginBody)
        })

      const json = await response.json();
      console.log(json);
      if (json.error == false) {
        // console.log(JSON.stringify(json));
        ToastAndroid.show(json.message, ToastAndroid.SHORT);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: json.result
        })
        navigation.navigate('HomeScreen')
      } else {
        ToastAndroid.show(json.message, ToastAndroid.SHORT);
      }

    } catch (error) {
      console.error(error);

    }
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter Password"
        keyboardType="numeric"
      />
      <Button
        title="Login"
        onPress={() => { doLogin() }
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },

});

export default Login;



