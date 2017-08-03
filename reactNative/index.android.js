/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import issues from './src/issues'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,Button
} from 'react-native';

export default class reactNative extends Component {
  constructor(props) {
  super(props);
  this.state = { text: 'Url de repostiorio...' };
  this.buscar=this.buscar.bind(this);
}
buscar(){

}
  render() {
    return (
<View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
        onPress={this.buscar}
        title="Buscar"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
</View >
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactNative', () => reactNative);
