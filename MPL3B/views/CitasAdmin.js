/* eslint-disable prettier/prettier */
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import React, {useState} from 'react';
import DropdownSelect from 'react-native-input-select';
import DatePicker from 'react-native-modern-datepicker';
import {useNavigation} from '@react-navigation/native';

const tablaCitas2 = () => {
  const navigation = useNavigation();
  const appointsCustomerData = {
    tableHead: [
      'Nombre del paciente',
      'Tipo de Examen',
      'Fecha de realización',
      'Estado',
      ' ',
    ],
    tableData: [
      [
        'Josefino Prudencio',
        'Glucosa',
        '27-nov-2022',
        'Muestra Entregada',
        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            navigation.navigate('Estado de Citas');
          }}>
          <Text style={styles.text4}>Mas detalles</Text>
        </TouchableOpacity>,
      ],
      [
        'Margarita Sanchez',
        'Colesterol',
        '12-sep-2022',
        'No Iniciado',
        <TouchableOpacity style={styles.button3}
        onPress={() => {
            navigation.navigate('Estado de Citas');
          }}>
          <Text style={styles.text4}>Mas detalles</Text>
        </TouchableOpacity>,
      ],
      [
        'Leopoldo Huezo',
        'Tiroides',
        '08-sep-2022',
        'Muestra Entregada',
        <TouchableOpacity style={styles.button3}
        onPress={() => {
            navigation.navigate('Estado de Citas');
          }}>
          <Text style={styles.text4}>Mas detalles</Text>
        </TouchableOpacity>,
      ],
      [
        'Sara Martinez',
        'Prueba de embarazo',
        '12-ago-2022',
        'Finalizado',
        <TouchableOpacity style={styles.button3}
        onPress={() => {
            navigation.navigate('Estado de Citas');
          }}>
          <Text style={styles.text4}>Mas detalles</Text>
        </TouchableOpacity>,
      ],
    ],
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>HISTORIAL DE CITAS DE EXAMENES</Text>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row
          data={appointsCustomerData.tableHead}
          style={styles.head}
          textStyle={styles.headText}
        />
        <Rows data={appointsCustomerData.tableData} textStyle={styles.text} />
      </Table>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 30,
  },
  head: {
    height: 40,
    backgroundColor: '#27AE60',
  },
  headText: {
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 4,
    textAlign: 'center',
    fontSize: 12,
  },
  text1: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  text3: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  text: {
    margin: 6,
    fontSize: 12,
  },
  text4: {
    margin: 6,
    fontSize: 10,
  },
  borderinput: {
    borderWidth: 1,
    marginTop: 10,
    marginVertical: 10,
    marginRight: 50,
  },
  button1: {
    margin: 100,
    marginVertical: 5,
    marginRight: 0,
    marginLeft: 250,
    alignItems: 'center',
    backgroundColor: '#68C991',
    padding: 10,
    borderRadius: 25,
  },
  button2: {
    margin: 100,
    marginVertical: 5,
    marginRight: 0,
    marginLeft: 250,
    alignItems: 'center',
    backgroundColor: '#B2D9B2',
    padding: 10,
    borderRadius: 25,
  },
  button3: {
    alignItems: 'center',
    backgroundColor: '#68C991',
    padding: 2,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 6,
  },
});

export default tablaCitas2;
