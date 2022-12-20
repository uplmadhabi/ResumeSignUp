import React, {useState} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList
} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';

const Preview = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Builder.png')}
          style={styles.logo}
        />

        <Image source={require('../../assets/Icon.png')} style={styles.icon} />
      </View>

      <View style={styles.main}>
        <View style={styles.detailsOuter}>
          <View style={styles.headerMain}>
            <Text style={styles.text}> Robert Rodriguez</Text>
            <Text style={styles.text1}>Marketing Manager</Text>
            <View style={styles.textView}>
              <Text style={styles.text2}>Phone 9834567210 </Text>
              <Text style={styles.text2}>
                LinkedIn linkedin.com/in/rrrsdgfh
              </Text>
            </View>
            <Text style={styles.text3}> Email rrrrrrrr@gmail.com</Text>
          </View>
          <View style={styles.innerMain}>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </Text>
            <View>
            <Text style={styles.exp}>Experience</Text>
            </View>
            
            <View
              style={{
                borderBottomColor: '#828282',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <View style={styles.presentDMMView}>
              <View>
                <Text style={{fontSize: 13, color: 'black'}}>
                  2017-06-present
                </Text>
                </View>
              <View style={styles.dmmView}>
                <Text style={{fontSize: 13, color: 'black'}}>
                  Digital Markrting Manager
                </Text>

                <FlatList
          data={[
            { key: 'It was popularised in the 1960s with the release of Letrasetsheets containing Lorem Ipsum passages' },
            { key: 'more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
            // { key: 'Shanghai' },
            // { key: 'Sao Paolo' },
            // { key: 'Mexico City' },
            // { key: 'Cairo' },
            // { key: 'Dhaka' },
            // { key: 'Mumbai' },
            // { key: 'Beijing' },
            // { key: 'Osaka' },
          ]}
          renderItem={({ item }) => {
            return (
            <View style={{}}>
              <View style={{ marginBottom: 10 , marginRight:40}}>
                <Text style={{ fontSize: 16 }}>{`\u2022 `}</Text>
                <Text style={{ fontSize: 16 }}>{` ${item.key}`}</Text>
              </View>
            </View>
            );
          }}
        />



                {/* <Text style={{padding: 10, marginRight:10,}}>
                It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages
                </Text>
                <Text>more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text> */}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <View style={styles.cancel}>
            <Button title="Cancel" color="#32333E" />
          </View>

          <View style={styles.edit}>
            <Button title="Edit" color="#828282" />
          </View>
          <View style={styles.download}>
            <Button title="Download" color="#4280EF" />
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
    height: 80,
    backgroundColor: '#2F3044',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },

  logo: {
    height: 23,
    width: 120,
  },

  icon: {
    height: 26,
    width: 26,
  },
  main: {
    // height: '100%',
    backgroundColor: '#E3E8EE',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  detailsOuter: {
    height: 'auto',
    margin: 15,
    // width: '90%',
    // marginTop: 20,
    backgroundColor: '#FFFFFF',
    // alignSelf: 'center',
  },
  headerMain: {
    height: 120,
    backgroundColor: '#595969',
    flexDirection: 'column',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 22,
    marginTop: 10,
    marginStart: 14,
  },
  button: {
    flexDirection: 'row',
    height: 70,
    width: '90%',

    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  cancel: {
    justifyContent: 'flex-start',
    marginStart: '5%',
    width: '25%',
  },
  download: {
    padding: 10,
    width: '30%',
    marginstart: '20%',
    justifyContent: 'flex-end',
  },
  edit: {
    width: '20%',
    marginLeft: 59,
  },
  text1: {
    color: '#FFFFFF',
    marginStart: 19,
  },
  text2: {
    color: '#FFFFFF',
    marginTop: 20,
    marginStart: 19,
  },
  text3: {
    color: '#FFFFFF',
    marginStart: 19,
  },
  textView: {
    flexDirection: 'row',
  },
  innerMain: {
    padding: 10,
  },
  exp: {
    fontSize: 25,
    color: 'black',
  },
  presentDMMView: {
    flexDirection: 'row',
    marginRight:50,
  },
  dmmView: {
    flexDirection: 'column',
    marginStart: 15,
    // marginRight:40
    
  },

});
export default Preview;
