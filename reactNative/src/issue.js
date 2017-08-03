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
    var styles = StyleSheet.create({
      negrita: { fontWeight:"bold"},
        rojo: { color:"red"},
          verde: { color:"green"}
    });


    return(
      <View>
      {this.props.state=="closed" ?   <Text  style={[styles.negrita,styles.rojo ]}>{this.props.title}</Text> :   <Text  style={[styles.negrita,styles.verde]}>{this.props.title}</Text>}

      </View>
    )
  }
}

export default Issue;
