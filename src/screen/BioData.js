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

const BioData = ({navigation}) => {
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.fillText}>
            Please fill all the steps to complete your resume
          </Text>
          <View style={styles.infoView}>
            <View style={styles.personalView}>
              <Text style={styles.infoText}>Bio Data  </Text>
            </View>
            <View style={styles.stepView}>
              <Text style={styles.stepText}>Step5/6</Text>
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
              progress={0.8}
              color="#77D6DE"
            />
          </View>
        </View>
        <View style={styles.main}>
        <View style = {styles. textView}>
            <TextInput style= {styles.textInput} placeholder={'A little bit about you'}/>
            <Text style={styles.text}>150 Words</Text>
        </View>

        <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Hobbies'}
                />
              </View>
        </View>

        <View style={styles.button}>
            <View style={styles.back}>
              <Button
                title="Back"
                color="#32333E"
                onPress={() => navigation.navigate('FirstJob')}
              />
            </View>
            <View style={styles.btn}>
              <Button
                title="Save & Next"
                color="#FE002D"
                onPress={() => navigation.navigate('Achievement')}
              />
            </View>
          </View>
    </View>
    </ScrollView>  
)
}

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
        height: 460,
        width: '100%',
        marginTop: 20,
        alignItems: 'center',

        // alignContent:'center',
       
        
      },
    textView:{
    height: '25%',
    width: '90%',
    marginTop: 20,
    backgroundColor: '#D3D3D3',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomWidth: 1,
    flexDirection: 'column',
    },
    textInput:{
        marginStart:10
    },
    text:{
        marginTop:25,
        left:340
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
})

export default BioData;