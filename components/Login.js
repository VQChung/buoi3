import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import MyTextInput from './MyTextInput';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');
const textInputWidth = 0.8 * width;

const _loginFacebook = () => {
  alert('loginFacebook');
};

const _loginGoogle = () => {
  alert('_loginGoogle');
};

const _loginTwitter = () => {
  alert('_loginTwitter');
};
export default class Login extends Component {
  render() {
    const {gotoList} = this.props.screenProps;
    return (
      <View style={{flex: 1}}>
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
        />
        <Text style={styles.smallText}>FORGOT PASSWORD?</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            gotoList();
          }}>
          <Text style={styles.textButton}>Sign In</Text>
        </TouchableHighlight>
        <View style={styles.viewLine}>
          <View style={styles.line} />
          <Text style={{paddingHorizontal: 20}}>OR</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.bottomView}>
          <Icon
            onPress={() => {
              _loginFacebook();
            }}
            name={'facebook'}
            size={30}
            color="#3B579D"
            style={styles.bottomIcon}
          />
          <Icon
            onPress={() => {
              _loginGoogle();
            }}
            name={'google'}
            size={30}
            color="#EA4335"
            style={styles.bottomIcon}
          />
          <Icon
            onPress={() => {
              _loginTwitter();
            }}
            name={'twitter'}
            size={30}
            color="#2CAAE1"
            style={styles.bottomIcon}
          />
        </View>
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
