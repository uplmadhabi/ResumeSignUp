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
  TouchableOpacity,
} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import SegmentedProgressBar from 'react-native-segmented-progress-bar';

const PersonalInfo = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.fillText}>
            Please fill all the steps to complete your resume
          </Text>
          <View style={styles.infoView}>
            <View style={styles.personalView}>
              <Text style={styles.infoText}>Personal Information </Text>
            </View>
            <View style={styles.stepView}>
              <Text style={styles.stepText}>Step1/6</Text>
            </View>
          </View>
          <View style={styles.progessbarView}>
            {/* <SegmentedProgressBar
              showSeparatorValue={true}
              borderRadius={3}
              values={[0, 10, 30, 80, 100]}
              colors={['grey', 'green', 'orange', 'red']}
              labels={['underweight', 'normal', 'overweight', 'obese']}
              position={80}
            /> */}

            <ProgressBar
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.2}
              color="#77D6DE"/>
             
          </View>
        </View>
        <View style={styles.detailsVw}>
          <View style={styles.profileIV}>
            <Image
              source={require('../../assets/Image.png')}
              style={styles.image}
            />
            <Text style={styles.uploadImageText}> Upload Image</Text>
          </View>

          <View style={styles.textInputView}>
            <TextInput style={styles.textInput} placeholder={'Full Name'} />
          </View>
          <View style={styles.textInputView}>
            <TextInput style={styles.textInput} placeholder={'Pofession'} />
          </View>
          <View style={styles.textInputView}>
            <TextInput style={styles.textInput} placeholder={'City'} />
          </View>
          <View style={styles.countryPinIV}>
            <View style={styles.countryView}>
              <TextInput style={styles.textInput} placeholder={'Country'} />
            </View>
            <View style={styles.pinView}>
              <TextInput style={styles.textInput} placeholder={'Pin Code'} />
            </View>
          </View>
          <View style={styles.textInputView}>
            <TextInput style={styles.textInput} placeholder={'Phone'} />
          </View>
          <View style={styles.textInputView}>
            <TextInput style={styles.textInput} placeholder={'Email'} />
          </View>
          <View style={styles.personalInfoIV}>
            <TextInput style={styles.textInput} placeholder={'Personal Info'} />
          </View>
          <View style={styles.btn}>
            <Button
              title="Save & Next"
              color="#FE002D"
              onPress={() => navigation.navigate('EducationInfo')}
            />
          </View>
        </View>
      </View>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },

  header: {
    height: 'auto',
    backgroundColor: '#2F3044',
    // flex: 1,
  },
  fillText: {
    color: '#FFFFFF',
    padding: '10%',
  },
  infoView: {
    flexDirection: 'row',
  },
  personalView: {
    justifyContent: 'flex-start',
    marginStart: '6%',
  },
  stepView: {
    justifyContent: 'flex-end',
    marginLeft: '40%',
  },
  infoText: {
    color: '#FFFFFF',
    marginLeft: '10%',
  },
  stepText: {
    color: '#FFFFFF',
  },
  progessbarView: {
    marginVertical: 24,
  },
  detailsVw: {
    // flex: 1,
    marginVertical: 30,
    height: 'auto',
    flexDirection: 'column',
  },
  image: {
    height: 150,
    width: 150,
  },
  uploadImageView: {
    marginTop: 10,
    width: 150,
  },
  uploadImageText: {
    borderWidth: 2,
    borderColor: '#D3D3D3',
    borderRadius: 5,
    padding: 15,
    marginTop: 10,
    width: 150,
    textAlign: 'center',
  },
  textView: {
    alignItems: 'center',
  },
  textInputView: {
    height: 50,
    width: '85%',
    marginTop: 20,
    backgroundColor: '#D3D3D3',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  countryPinIV: {
    flexDirection: 'row',
    height: 50,
    width: '85%',
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  countryView: {
    width: '60%',
    backgroundColor: '#D3D3D3',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
  },
  pinView: {
    marginRight: '1%',
    width: '35%',
    backgroundColor: '#D3D3D3',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomWidth: 1,
    justifyContent: 'flex-end',
  },
  personalInfoIV: {
    height: 100,
    width: '85%',
    marginTop: 10,
    backgroundColor: '#D3D3D3',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textInput: {
    flex: 1,
    padding: 10,
  },
  profileIV: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 10,
    height: 70,
    width: '30%',
    marginLeft: '63%',
  },
});
export default PersonalInfo;
