/* eslint-disable no-alert */
import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableHighlight,
} from 'react-native';
import TopTapNavigation from './TopTabNavigation';
import Loader from './Loader';
const {width} = Dimensions.get('window');
const textInputWidth = 0.8 * width;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({isLoading: false});
    }
  }
  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../image/a.png')} />
        <View style={styles.mainArea}>
          <TopTapNavigation screenProps={{gotoList: () => this.GotoList()}} />
        </View>
        <TouchableHighlight
          onPress={() => {
            this.GotoList();
          }}>
          <Text>aaaaaaaaaa</Text>
        </TouchableHighlight>
      </View>
    );
  }
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 3000),
    );
  };
  GotoList() {
    const {navigate} = this.props.navigation;
    navigate('FlatListDemo');
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: textInputWidth / 4,
    height: textInputWidth / 4,
    aspectRatio: 1 / 1,
    borderRadius: textInputWidth / 4,
    marginBottom: 20,
  },
  mainArea: {
    backgroundColor: 'yellow',
    width: textInputWidth,
    flex: 1,
  },
});
