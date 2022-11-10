/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import {Text,ScrollView,View,StyleSheet, TouchableOpacity} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import React, {useState} from 'react';
import DropdownSelect from 'react-native-input-select';
import DatePicker from 'react-native-modern-datepicker';


const tablaCitas = () => {
  const [Examen, setExamen] = React.useState();
  const [shouldShow, setShouldShow] = useState(false);
  const [shouldShow1, setShouldShow1] = useState(true);
  const [selectedDate, setSelectedDate] = useState('');
  const mostrar = () => {
    setShouldShow(!shouldShow);
  };
  const Nomostrar = () => {
    setShouldShow1(!shouldShow1);
  };
  const appointsCustomerData = {
    tableHead: ['Tipo de Examen', 'Fecha de realización', 'Estado', ' '],
    tableData: [
      ['Glucosa', '27-nov-2022', 'Muestra Entregada', <TouchableOpacity style={styles.button3}><Text style={styles.text4}>Mas detalles</Text></TouchableOpacity>],
      ['Colesterol', '12-sep-2022', 'No Iniciado',<TouchableOpacity style={styles.button3}><Text style={styles.text4}>Mas detalles</Text></TouchableOpacity>],
      ['Tiroides', '08-sep-2022', 'Muestra Entregada',<TouchableOpacity style={styles.button3}><Text style={styles.text4}>Mas detalles</Text></TouchableOpacity>],
      ['Prueba de embarazo', '12-ago-2022', 'Finalizado',<TouchableOpacity style={styles.button3}><Text style={styles.text4}>Mas detalles</Text></TouchableOpacity>],
    ],
  };
  return (
    <ScrollView style={styles.container}>
    <TouchableOpacity
  style={styles.button1}
  onPress={mostrar}
  >
  <Text style={styles.text1}>+ Nueva Cita</Text>
  </TouchableOpacity>
  {}
        {shouldShow ? (
          <View>
          <View style={styles.contenedor}>
        <View style={styles.caja1}>
<DropdownSelect
        label="Tipo de examen a realizarse:"
        placeholder="Seleccione una opcion"
        options={[
          { name: 'Biometría Hermática', code: 'BH' },
          { name: 'Bimetría + Reticulocitos automatizados', code: 'BRA' },
          { name: 'Hematocrito - Hemoglobina', code: 'HH' },
          { name: 'Eritrosedimentación <V.S.G>', code: 'VSG' },
          { name: 'Recuento de Plaquetas', code: 'RP' },
          { name: 'Reticulocitos Automatizado', code: 'AO' },
          { name: 'Tipo de Sangre', code: 'TS' },
          { name: 'Glucosa', code: 'GL' },
          { name: 'Ácido Úrico', code: 'AU' },
          { name: 'Colesterol Total', code: 'AU' },
        ]}
        optionLabel={'name'}
        optionValue={'code'}
        selectedValue={Examen}
        onValueChange={(value) => setExamen(value)}
        primaryColor={'green'}
      />

<Text style={styles.text3}>
  Fecha de Realización:
</Text>
 <DatePicker
   options={{
        backgroundColor: '#FFFFFF',
        textHeaderColor: '#008000',
        textDefaultColor: '#008000',
        selectedTextColor: '#fff',
        mainColor: '#008000',
        textSecondaryColor: '#008000',
        borderColor: '#002A00',
        borderWidth:1,
      }}
      onSelectedChange={date => setSelectedDate(date)}
      current="2022-01-01"
      minimumDate="2022-01-01"
      maximumDate="2030-12-31"
    />

    <TouchableOpacity
  style={styles.button2}
  onPress={Nomostrar}
  >
  <Text style={styles.text1}>Registrar Cita</Text>
  </TouchableOpacity>
        </View>
      </View>
          </View>
        ) : null}
      <Text style={styles.headerText}>
        HISTORIAL DE CITAS DE EXAMENES
      </Text>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={appointsCustomerData.tableHead} style={styles.head} textStyle={styles.headText}/>
        <Rows data={appointsCustomerData.tableData} textStyle={styles.text}/>
      </Table>
    </ScrollView>
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
  text1:{
    textAlign:'center',
       fontSize: 15,
       fontWeight:'bold',
     },
     text3:{
         fontSize: 15,
         fontWeight:'bold',
       },
  text: {
    margin: 6,
    fontSize: 12,
  },
  text4: {
    margin: 6,
    fontSize: 10,
  },
  borderinput:{
    borderWidth:1,
    marginTop: 10,
    marginVertical:10,
    marginRight:50,
    },
  button1: {
    margin:100,
    marginVertical:5,
    marginRight:0,
    marginLeft:250,
    alignItems: 'center',
    backgroundColor: '#68C991',
    padding: 10,
    borderRadius: 25,
  },
  button2: {
    margin:100,
    marginVertical:5,
    marginRight:0,
    marginLeft:250,
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
    marginLeft:10,
    marginRight:6,
    },
});

export default tablaCitas;