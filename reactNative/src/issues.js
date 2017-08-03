import React, { Component } from 'react';
import Issue from './issue'
import  { Text,StyleSheet, View, Table,TableWraper, Row, Rows, Col, Cols, Cell ,h1} from 'react-native';


class Issues extends Component{
  constructor(props){
    super(props);
    this.tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
    this.tableData = [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
    ];
    this.styles = StyleSheet.create({
      head: { height: 40, backgroundColor: '#f1f8ff' },
      text: { marginLeft: 5 },
      row: { height: 30 }
    })
  }
  componentWillMount(){
    console.log("fd");
  }

  render(){

    if (this.props.data && this.props.data.length && !this.props.error){
      var styles = StyleSheet.create({
        titulo: { fontSize:15},
        bold: { fontWeight:'bold'},
        cabeceraTabla:{fontWeight:'bold',"alignSelf":'flex-start',flexDirection:'column',},
        contenedor:{  flexWrap: 'wrap',  alignItems: 'flex-start', flexDirection:'row',}
      });
      return(
        <View>

        <View>

        {this.props.data.map( ( issue, i ) => {
            return <Issue key={i} state={issue.state} title={issue.title}/>
        } )}
        </View>
        </View>
      );
    }else{
      return(
        <View>
          <Text>Nada que mostrar</Text>
        </View>
      );
    }
  }
}

export default Issues;
