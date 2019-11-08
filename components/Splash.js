import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.viewSplash}>
        <Text style={styles.splashText}> Splash Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  splashText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  viewSplash: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
