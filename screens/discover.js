import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View } from 'react-native';

export default function Discover() {
  
    return (
      <View style={styles.container}>
        <Text>This the discover page bish</Text>
        <StatusBar style="auto" />
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
