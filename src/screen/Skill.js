import React, {useState} from 'react';

import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
  } from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import CheckBox from '@react-native-community/checkbox';

const Skill = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.fillText}>
            Please fill all the steps to complete your resume
          </Text>
          <View style={styles.infoView}>
            <View style={styles.personalView}>
              <Text style={styles.infoText}>Skills</Text>
            </View>
            <View style={styles.stepView}>
              <Text style={styles.stepText}>Step3/6</Text>
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
              progress={0.6}
              color="#77D6DE"
            />
          </View>
        </View>

        <View style={styles.main}>
          <View style={styles.detailsOuter}>
            <View style={styles.headerMain}>
              <Text style={styles.skillText}>Skill 01</Text>
              
              <Image
                source={require('../../assets/DeleteIcon.png')}
                style={styles.delete}
              />
             
            </View>
            <View style={styles.details}>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Skill Name'}
                />
              </View>

              <View style={styles.progessView}>
                <ProgressBar
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={0.2}
                  color="#F8C303"
                  borderTopStartRadius="8"
                  borderTopEndRadius="8"
                />
              </View>
            </View>
          </View>
          <View style={styles.addView}>
            <Text style={styles.addText}> + Add Another School</Text>
          </View>
          <View style={styles.button}>
            <View style={styles.back}>
              <Button
                title="Back"
                color="#32333E"
                onPress={() => navigation.navigate('EducationInfo')}
              />
            </View>
            <View style={styles.btn}>
              <Button title="Save & Next" color="#FE002D"
              onPress={() => navigation.navigate('FirstJob')} />
            </View>
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
    marginLeft: '60%',
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
    height: 690,
    backgroundColor: '#E3E8EE',
  },
  detailsOuter: {
    height: 400,
    width: '90%',
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },
  details: {
    height: 20,
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  skillText: {
    color: '#FFFFFF',

  },

  delete: {
   
    height: 16,
    width: 16,
  },
  progessView: {
    marginVertical: 24,
    width: 360,
  },
  addView: {
    alignItems: 'center',
    marginTop: 25,
  },
  addText: {
    borderWidth: 1,
    borderColor: '#828282',
    padding: 10,
  },
  button: {
    flexDirection: 'row',
    height: 70,
    width: '90%',
    marginTop: 75,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 10,
    width: '30%',
    marginstart: '70%',
    justifyContent: 'flex-end',
  },
  back: {
    width: '20%',
    marginStart: '50%',
    justifyContent: 'flex-start',
  },
});
export default Skill;
