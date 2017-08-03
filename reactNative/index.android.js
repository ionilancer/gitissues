/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Issues from './src/issues'

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
    this.issues=[];
  this.state = {
    text: 'Url de repostiorio...',
    issues:  this.issues};
  this.buscar=this.buscar.bind(this);
}
buscar(){
this.getUserAndRep();
}
getUserAndRep(){
return fetch('https://api.github.com/repos/ionilancer/gitissues/issues?state=all')
.then((response) => response.json()) .then((responseJson) => {
var str = responseJson;
let string="";
  for (var i = 0; i < str.length; i++) {
    this.issues[i]={};
    this.issues[i].number=str[i].number;
    this.issues[i].title=str[i].title;
    this.issues[i].url=str[i].html_url;
    this.issues[i].state=str[i].state;
    this.issues[i].body=str[i].body;
    string+=this.issues[i].number;
  }

  this.setState({  issues:  this.issues}); return responseJson; })
.catch((error) => { console.error(error);  });
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
        color="#2E64FE"
      />
      <Issues data ={this.state.issues}/>
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
