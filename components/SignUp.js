import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import MyTextInput from './MyTextInput';

const {width} = Dimensions.get('window');
const textInputWidth = 0.8 * width;
export default class SignUp extends Component {
  render() {
    return (
      <View>
        <MyTextInput
          title="email"
          placeholder="Enter your email"
          icon="user"
          validate="email"
          isPassword={false}
          style={{marginBottom: 20, marginTop: 20}}
        />
        <MyTextInput
          title="password"
          placeholder="Enter your password"
          icon="lock"
          validate="password"
          isPassword={true}
          style={{marginBottom: 20}}
        />
        <MyTextInput
          title="Confirm password"
          placeholder="Enter your password"
          icon="lock"
          validate="password"
          isPassword={true}
          style={{marginBottom: 20}}
        />
        <TouchableHighlight style={styles.button}>
          <Text style={styles.textButton}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const colors = {
  violet: '#341952',
  inactiveTint: '#D9D5DA',
  background: '#FFFFFF',
  border: '#E3DEE2',
  textLight: '#655D68',
  textBold: '#564567',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
    // backgroundColor: '#efefef',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: textInputWidth,
    borderRadius: 20,
    backgroundColor: colors.violet,
    marginBottom: 20,
  },
  textButton: {
    color: 'white',
  },
  viewLine: {
    width: textInputWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: 'gray',
  },
  smallText: {
    fontSize: 10,
    //backgroundColor: 'red',
    textAlign: 'right',
    paddingVertical: 6,
    color: colors.textLight,
  },
  mainArea: {
    backgroundColor: 'yellow',
    width: textInputWidth,
    flex: 1,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomIcon: {
    padding: 10,
  },
});
