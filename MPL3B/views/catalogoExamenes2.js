/* eslint-disable prettier/prettier */
import * as React from 'react';
import {StyleSheet, TouchableOpacity, Text,View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const testGrid = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Biometría Hermática</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$7.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Bimetría + Reticulocitos automatizados</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$10.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Hematocrito - Hemoglobina</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$4.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Eritrosedimentación {'V.S.G'}</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$1.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Recuento de Plaquetas</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$4.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Reticulocitos Automatizado</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$4.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Tipo de Sangre</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$4.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Coombs Indirecto</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$5.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Coombs Directo</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$5.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Células L.E.</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$3.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Hematozoario</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$3.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Hemocultivo'</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$25.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Morfología Celular</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$3.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Anticoagulante Lúpico</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$27.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Electroforesis de Hemoglobina</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>Si</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$38.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Glucosa</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>Si</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$2.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Glucosa Post-Prandial</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$2.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
    <Text style={styles.ename}>Hb. Glicosilada {'<A1c>'}</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$7.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Fructosamina</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>Si</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$12.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Test de O\'Sullivan</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>Si</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$12.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Curva Glucosa {'<2 HORAS>'}</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>Si</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$15.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Curva Glucosa {'<3 HORAS>'}</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>si</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$17.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Curva Glucosa {'<4 HORAS>'}</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>Si</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$19.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Curva Glucosa {'<5 HORAS>'}</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>Si</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$21.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Urea</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>Si</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$2.00</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>BUN</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>Si</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$2.50</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Creatinina + Tasa Filtración Glomerular</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>No</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$3.00</Text>
         </View>
        </View>
      </TouchableOpacity><TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Ácido Úrico</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>Si</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$2.50</Text>
         </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
         <Text style={styles.ename}>Colesterol Total</Text>
         <View style={styles.row}> 
         <Text style={styles.txt}>Requiere Ayuno: </Text>
         <Text style={styles.op}>Si</Text>
         </View>
         <View style={styles.row}> 
         <Text style={styles.txt}>Precio: </Text>
         <Text style={styles.op}>$2.50</Text>
         </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  op:{
    marginBottom: 25,
    fontStyle: 'bold',
    fontWeight: 'bold',
    fontSize:20,
    color: 'white',
    textAlign: 'center'
  },
  txt:{
    marginBottom: 25,
    fontStyle: 'bold',
    fontWeight: 'bold',
    fontSize:20,
    color: 'white',
    textAlign: 'center'
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30
  },
  ename:{
    marginBottom: 25,
    fontStyle: 'bold',
    fontWeight: 'bold',
    fontSize:25,
    color: 'white',
    textAlign: 'center'
  },
  card:{
    paddingTop: 30,
    margin:20,
    borderWidth: 2,
    backgroundColor: '#27AE60',
    borderColor: 'green',
    minHeight: 250,
    borderRadius: 20,
  },  
  container: {
        paddingBottom: 20,
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