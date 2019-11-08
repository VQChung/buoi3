import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, Alert, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const containerHeight = height / 8;
const containerWidth = width;
export default class ItemFLatList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../image/a.png')} />
        <Text style={styles.title}>Báo mới, báo mới đây</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: containerHeight,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  image: {
    width: containerWidth / 4,
    height: containerHeight,
  },
  title: {
    paddingLeft: 10,
  },
});
