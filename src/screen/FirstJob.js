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

const FirstJob = ({navigation}) => {
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.fillText}>
            Please fill all the steps to complete your resume
          </Text>
          <View style={styles.infoView}>
            <View style={styles.personalView}>
              <Text style={styles.infoText}>Work History </Text>
            </View>
            <View style={styles.stepView}>
              <Text style={styles.stepText}>Step4/6</Text>
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
              <Text style={styles.jobText}>First Job</Text>
              <Image
                source={require('../../assets/DeleteIcon.png')}
                style={styles.delete}
              />
            </View>
            <View style={styles.details}>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Company Name'}
                />
              </View>
              <View style={styles.textInputView}>
                <TextInput style={styles.textInput} placeholder={'Position '} />
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Start Date'}
                />
              </View>
              <View style={styles.textInputView}>
                <TextInput style={styles.textInput} placeholder={'End Date'} />
              </View>

              <View style={styles.descriptionIV}>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Description'}
                />
              </View>

              
            </View>
          </View>
          <View style={styles.addView}>
            <Text style={styles.addText}> +  Add Another Job</Text>
          </View>

          <View style={styles.button}>
            <View style={styles.back}>
              <Button
                title="Back"
                color="#32333E"
                onPress={() => navigation.navigate('Skill')}
              />
            </View>
            <View style={styles.btn}>
              <Button
                title="Save & Next"
                color="#FE002D"
                onPress={() => navigation.navigate('BioData')}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
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
    height: 'auto',
    backgroundColor: '#E3E8EE',
  },
  detailsOuter: {
    height: 460,
    width: '90%',
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  jobText: {
    color: '#FFFFFF',
   
  },
  delete: {
   
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
  checkBoxView: {
    alignItems: 'center',
    height: '6%',
    width: '85%',
    marginTop: 5,
    marginBottom: 5,
    marginRight: '8%',
    flexDirection: 'row',
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
export default FirstJob;
