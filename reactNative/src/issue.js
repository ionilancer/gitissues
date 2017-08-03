import React, { Component } from 'react';

import  { Text,StyleSheet,View ,Col,Cell} from 'react-native';

class Issue extends Component{
  constructor(props){
    super(props);
    this.i=0;
  }
  componentWillMount(){
    console.log("fd");
  }

  render(){
    var styles = StyleSheet.create({ negrita: { fontWeight:"bold"}});

    return(
      <View>
      <Text  style={[styles.negrita]}>{this.props.title}</Text>
      </View>
    )



  }
}

export default Issue;
