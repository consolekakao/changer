import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Header = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}>
          <Text style={styles.buttonText}>이전</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            navigation.popToTop();
          }}>
          <Text style={styles.buttonText}>처음으로</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#fff',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    // width: 100,
  },
  buttonText: {
    fontSize: 18,
    color: '#007AFF',
  },
});
