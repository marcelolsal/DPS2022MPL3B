import React, {useState} from 'react';
// Import required components
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  TextInput
} from 'react-native';


// Import HTML to PDF
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const Archivo = () => {
  const [filePath, setFilePath] = useState('');
  const [namefile, setNameFile] = useState('');
  const [examen, setText1] = useState('');
  const [resultado, setResultado] = useState('');
  const fecha = new Date().toLocaleDateString();

  const isPermitted = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs access to Storage data',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        alert('Write permission err', err);
        return false;
      }
    } else {
      return true;
    }
  };
  
  const createPDF = async () => {
    if (await isPermitted()) {
      let options = {
        //Content to print
        html: `
        <body style="">
        <header style="">
        <h1 style="text-align: center; "><strong>MyProlab3M</strong></h1>
        <div style=" width:100%; height: 100px; margin: 10px">
    	<div style="width:49%; height: 100px; display: inline-block;">
                   <p>Paciente: ${namefile} </p>
                   <p>Edad: ${namefile} </p>
                   <p>Genero: ${namefile} </p>                   
      </div>
      
	    <div style=" width:49%; height: 100px; display:inline-block;">
                  <p style="text-align: right;">Fecha de Examen: ${fecha}</p>
                  </div>
        </div>
        </header>
        <hr>
        <div>
        <h1 style="text-align: center; ">Resultados</h1>
        </div>
         <div>
         <div style=" width:100%; height: 100px;">
	       <div style=" width:50%; height: 100px; display: inline-block;">
                  <p> ${examen}</p>
                   </div>
	      <div style=" blue; width:24.5%; height: 100px; display:inline-block;">
                   <p> ${resultado}</p> 
                  </div>
                  <div style=" width:24.5%; height: 100px; display:inline-block;">
                  
                  </div>
        </div>
        </div>       
        </body>
        `,
        //File Name
        fileName: namefile ,
        //File directory
        directory: 'docs',
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      console.log(namefile);
      console.log(examen);
      setFilePath(file.filePath);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.titleText}>
        Resultados de Examenes
      </Text>
      <View style={styles.container}>
       <View style={styles.campos}>
       <Text style={styles.titleText}>
        Nombre del Documento: 
      </Text>
      <TextInput style={styles.Tipunt} type='text' onChangeText={setNameFile}></TextInput>
       <Text style={styles.textStyle}>Ingrese el tipo de examen</Text>
       <TextInput style={styles.Tipunt} type='text' onChangeText={setText1}></TextInput>
       <Text style={styles.textStyle}>Ingrese los resultados</Text>
       <TextInput 
       multiline={true}
       numberOfLines ={4}
       style={styles.Tarea} 
       type='text' 
       onChangeText={setResultado}></TextInput>
       </View>
        <TouchableOpacity onPress={createPDF}>
          <View>
            <Image
              //We are showing the Image from online
              source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/pdf.png',
              }}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>Create PDF</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.textStyle}>{filePath}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Archivo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
    color: 'black',
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 18,
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  imageStyle: {
    width: 150,
    height: 100,
    margin: 5,
    resizeMode: 'stretch',
  },campos:{
    minHeight: '50%',
  },Tipunt:{
    borderWidth: 1,
    color: 'black',
  },Tarea:{
    borderWidth: 1,
    textAlign: 'left',
    color: 'black',
  }
});
