import React, {ChangeEvent, useState, type PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Header} from './Components/Header/Header';
import config from './config.json';

var client_id = config.NAVER_APIKEY;
var client_secret = config.NAVER_APISECRET;

const App = () => {
  const [inputText, setInputText] = useState<string>('');

  const requestTranslation = () => {
    // todo: 네이버 API 연동해야함.
  };

  const InputText = () => {
    return (
      <>
        <TextInput
          style={styles.inputBox}
          multiline
          value={inputText}
          autoFocus
          onChangeText={setInputText}
        />
      </>
    );
  };

  const ButtonArea = () => {
    return (
      <View style={styles.row}>
        <View style={[styles.button, styles.reset]}>
          <Button
            onPress={() => {
              setInputText('');
            }}
            color={'#fff'}
            title={'Reset'}></Button>
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => {
              requestTranslation();
            }}
            color={'#fff'}
            title={'Change'}></Button>
        </View>
      </View>
    );
  };

  const ResultArea = () => {
    return <View style={styles.resultArea}></View>;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <Header /> */}
        <InputText />
        <ButtonArea />
        <ResultArea />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    borderRadius: 20,
    width: '40%',
    backgroundColor: '#25A919',
  },
  reset: {backgroundColor: '#d3d3d3'},
  resultArea: {
    width: '100%',
    borderColor: '#d3d3d3',
    fontSize: 20,
    marginTop: 40,
    height: 100,
    borderWidth: 2,
    borderRadius: 10,
  },
  inputBox: {
    borderColor: '#d3d3d3',
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 20,
    width: '100%',
    height: 200,
    paddingHorizontal: 10,
  },
});

export default App;
