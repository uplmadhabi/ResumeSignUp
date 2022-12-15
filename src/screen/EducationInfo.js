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
import CheckBox from '@react-native-community/checkbox';

const EducationInfo = () => {
  return (
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
            color="#77D6DE"
          />
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.detailsOuter}>
          <View style={styles.headerMain}>
            <Text style={styles.sclText}>School 01</Text>
            <Image
              source={require('../../assets/DeleteIcon.png')}
              style={styles.delete}
            />
          </View>
          <View style={styles.details}>
            <View style={styles.textInputView}>
              <TextInput
                style={styles.textInput}
                placeholder={'Course/Degree'}
              />
            </View>
            <View style={styles.textInputView}>
              <TextInput style={styles.textInput} placeholder={'School Name'} />
            </View>
            <View style={styles.textInputView}>
              <TextInput style={styles.textInput} placeholder={'Grade/Score'} />
            </View>
            <View style={styles.dateIV}>
              <View style={styles.startDateView}>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Start Date'}
                />
              </View>
              <View style={styles.endDateView}>
                <TextInput style={styles.textInput} placeholder={'End Date'} />
              </View>
            </View>
            <View style={styles.descriptionIV}>
              <TextInput style={styles.textInput} placeholder={'Description'} />
            </View>
            <View style= {styles.checkBoxView}>
              <CheckBox
                disabled={false}
                value={isSelected}
                onValueChange={newValue => setSelection(newValue)}
              />
              <Text>I currently attend here </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    height: '100%',
  },

  header: {
    height: 'auto',
    backgroundColor: '#2F3044',
    //   flex: 1,
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
  main: {
    height: '100%',
    backgroundColor: '#E3E8EE',
  },
  detailsOuter: {
    height: 480,
    width: 440,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },
  details: {
    alignItems: 'center',
    flex: 1,
  },
  textInputView: {
    height: '10%',
    width: '90%',
    marginTop: 20,
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
  headerMain: {
    height: 50,
    backgroundColor: '#595969',
    flexDirection: 'row',
  },
  sclText: {
    color: '#FFFFFF',
    padding: 14,
  },
  delete: {
    alignSelf: 'center',
    left: 320,
    height: 16,
    width: 16,
  },
  dateIV: {
    flexDirection: 'row',
    height: 50,
    width: '90%',
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  startDateView: {
    width: '60%',
    backgroundColor: '#D3D3D3',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
  },
  endDateView: {
    width: '35%',
    backgroundColor: '#D3D3D3',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomWidth: 1,
    justifyContent: 'flex-end',
  },
  descriptionIV: {
    height: 100,
    width: '90%',
    marginTop: 10,
    backgroundColor: '#D3D3D3',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  checkBoxView:{
    alignItems:"center",
    height: '6%',
    width: '85%',
    marginTop: 5,
    marginBottom:5,
   
    flexDirection: 'row',
  }
});
export default EducationInfo;
