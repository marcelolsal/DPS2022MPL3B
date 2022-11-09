/* eslint-disable prettier/prettier */
import * as React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Table, Row, Rows} from 'react-native-table-component';

const testGrid = () => {
  const testTableData = {
    tableHead: ['Examen', 'Requiere Ayuno', 'Precio'],
    tableData: [
      ['Biometría Hermática', 'No', '$7.00'],
      ['Bimetría + Reticulocitos automatizados', 'No', '$10.00'],
      ['Hematocrito - Hemoglobina', 'No', '$4.00'],
      ['Eritrosedimentación <V.S.G>', 'No', '$1.00'],
      ['Recuento de Plaquetas', 'No', '$4.00'],
      ['Reticulocitos Automatizado', 'No', '$4.00'],
      ['Tipo de Sangre', 'No', '$4.00'],
      ['Coombs Indirecto', 'No', '$5.00'],
      ['Coombs Directo', 'No', '$5.00'],
      ['Células L.E.', 'No', '$3.00'],
      ['Hematozoario', 'No', '$3.00'],
      ['Hemocultivo', 'No', '$25.00'],
      ['Morfología Celular', 'No', '$3.00'],
      ['Anticoagulante Lúpico', 'No', '$27.00'],
      ['Electroforesis de Hemoglobina', 'Si', '$38.00'],
      ['Glucosa', 'Si', '$2.00'],
      ['Glucosa Post-Prandial', 'No', '$2.00'],
      ['Hb. Glicosilada <A1c>', 'No', '$12.00'],
      ['Fructosamina', 'Si', '$12.00'],
      ['Test de O\'Sullivan', 'Si', '$12.00'],
      ['Curva Glucosa <2 HORAS>', 'Si', '$15.00'],
      ['Curva Glucosa <3 HORAS>', 'Si', '$17.00'],
      ['Curva Glucosa <4 HORAS>', 'Si', '$19.00'],
      ['Curva Glucosa <5 HORAS>', 'Si', '$21.00'],
      ['Urea', 'Si', '$2.00'],
      ['BUN', 'Si', '$2.50'],
      ['Creatinina + Tasa Filtración Glomerular', 'No', '$3.00'],
      ['Ácido Úrico', 'Si', '$2.50'],
      ['Colesterol Total', 'Si', '$2.50']
    ]
  };
  return (
    <ScrollView style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={testTableData.tableHead} style={styles.head} textStyle={styles.headText}/>
        <Rows data={testTableData.tableData} textStyle={styles.text}/>
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

export default testGrid;