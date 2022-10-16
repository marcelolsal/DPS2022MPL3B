import * as React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const tablaCitas = () => {
  const btnMoreDetails = <Button title="Más Detalles +" color="#F9E79F" accessibilityLabel="" />; //Not functional yet
  const appointsCustomerData = {
    tableHead: ['Tipo de Examen', 'Fecha de realización', 'Estado'],
    tableData: [
      ['Glucosa','27-nov-2022','Muestra Entregada'],
      ['Colesterol','12-sep-2022','No Iniciado'],
      ['Tiroides','08-sep-2022','Muestra Entregada'],
      ['Prueba de embarazo','12-ago-2022','Finalizado']
    ]
  };
  const appointsAdminData = {
    tableHead: ['Paciente','Tipo de Examen', 'Fecha de realización', 'Estado'],
    tableData: [
      ['Hector Gonzáles','Glucosa','27-nov-2022','Muestra Entregada'],
      ['Victoria Hernández','Colesterol','12-sep-2022','No Iniciado'],
      ['Sofia Landaverde','Tiroides','08-sep-2022','Muestra Entregada'],
      ['Juan Pérez','Prueba de embarazo','12-ago-2022','Finalizado']
    ]
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>HISTORIAL DE CITAS DE EXAMENES (Paciente)</Text>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={appointsCustomerData.tableHead} style={styles.head} textStyle={styles.headText}/>
        <Rows data={appointsCustomerData.tableData} textStyle={styles.text}/>
      </Table>
      
      <Text style={styles.headerText}>HISTORIAL DE CITAS DE EXAMENES (Admin)</Text>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={appointsAdminData.tableHead} style={styles.head} textStyle={styles.headText}/>
        <Rows data={appointsAdminData.tableData} textStyle={styles.text}/>
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  headerText: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 30
  },
  head: {
    height: 40,
    backgroundColor: '#27AE60'
  },
  headText: {
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 4,
    textAlign: 'center',
    fontSize: 12
  },
  text: {
    margin: 6,
    fontSize: 12
  }
});

export default tablaCitas;