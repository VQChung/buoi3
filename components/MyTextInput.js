import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {validateEmail, validatePassword} from '../helpers/Validation';

const colors = {
  violet: '#341952',
  inactiveTint: '#D9D5DA',
  background: '#FFFFFF',
  border: '#E3DEE2',
  textLight: '#655D68',
  textBold: '#564567',
};

export default class MyTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: '',
      firstTimeCheck: true,
    };
  }
  checkValidate(validateString) {
    switch (validateString) {
      case 'password':
        return validatePassword(this.state.typedText);
      case 'email':
        return validateEmail(this.state.typedText);
      default:
        return '';
    }
  }
  render() {
    return (
      <View style={[this.props.style, styles.container]}>
        <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
        <View style={styles.wrapInput}>
          <Icon
            name={this.props.icon}
            size={30}
            color="#CCC6D0"
            style={styles.icon}
          />
          <TextInput
            onChangeText={typedText => {
              this.setState({typedText, firstTimeCheck: false});
            }}
            placeholder={this.props.placeholder}
            style={styles.textInput}
            secureTextEntry={this.props.isPassword}
          />
        </View>
        {!this.state.firstTimeCheck && (
          <Text style={styles.error}>
            {this.checkValidate(this.props.validate)}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 10,
  },
  wrapInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 6,
    height: 45,
  },
  container: {
    flexDirection: 'column',
  },
  textInput: {
    flex: 1,
    paddingStart: 10,
    color: colors.textBold,
  },
  title: {
    marginBottom: 10,
    paddingStart: 4,
    color: colors.textLight,
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
});
