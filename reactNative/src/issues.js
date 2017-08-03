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

    if (this.props.data && this.props.data.length){
      var styles = StyleSheet.create({
        titulo: { fontSize:15},
        bold: { fontWeight:'bold'},
        cabeceraTabla:{width:'30%',"alignSelf":'flex-start'}
      });
      return(
        <View>
                <Text style={[styles.titulo]} >Issues </Text>
        <View>
        <Text style={[styles.cabeceraTabla]} >Nombre</Text>
          <Text style={[styles.cabeceraTabla]} >Descripción</Text>
            <Text style={[styles.cabeceraTabla]} >Estado</Text>

        {this.props.data.map( ( issue, i ) => {
            return <Issue key={i} title={issue.title}/>
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
