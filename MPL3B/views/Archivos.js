/* eslint-disable prettier/prettier */
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
  TextInput,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

// Import HTML to PDF
import RNHTMLtoPDF, {convert} from 'react-native-html-to-pdf';

const Archivo = () => {
  var hora = new Date().getHours(); //To get the Current Date
  var segundos = new Date().getSeconds(); //To get the Current Date
  var minutos = new Date().getMinutes(); //To get the Current Date
  var dia = new Date().getDate(); //To get the Current Date
  const [filePath, setFilePath] = useState();
  const [namefile, setNameFile] = useState('');
  const [examen, setText1] = useState('');
  const [resultado, setResultado] = useState('');
  const fecha = new Date().toLocaleDateString();
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [estado, setEstado] = useState('');
  const [estado1, setEstado1] = useState('');
  const data = [
    {label: 'Pendiente', value: '1'},
    {label: 'En proceso', value: '2'},
    {label: 'Entregado', value: '3'},
  ];
  const data1 = [
    {label1: 'Pendiente', value1: '1'},
    {label1: 'En proceso', value1: '2'},
    {label1: 'Entregado', value1: '3'},
  ];
  const onPress = () => {
    console.log(estado);
  };

  const onPress1 = () => {
    console.log(estado1);
  };

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

  const renderItem1 = (item1: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item1.label1}</Text>
      </View>
    );
  };
  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
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
                   <p>Paciente: ${estado1} </p>
                   <p>Edad: ${estado1} </p>
                   <p>Genero: ${estado1} </p>                   
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
                  <p> ${estado}</p>
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
        fileName: estado1 + `${dia}` + `${hora}` + `${minutos}` + `${segundos}`,
        //File directory
        directory: 'docs',
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      console.log(estado);
      console.log(estado1);
      Alert.alert('El archivo del examen se genero con éxito');
      setFilePath(file.filePath);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.titleText}>Resultados de Examenes</Text>
        <View style={styles.container}>
          <View style={styles.campos}>
            <View style={styles.formestado}>
              <Text style={styles.fontform}>Seleccione el Usuario</Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                value={value1}
                data={data1}
                search
                maxHeight={300}
                labelField="label1"
                valueField="value1"
                placeholder="Elige el usuario"
                searchPlaceholder="Search..."
                onChange={item1 => {
                  setValue1(item1.value1);
                  setEstado1(item1.label1);
                }}
                renderItem={renderItem1}
              />
              <TouchableHighlight onPress={onPress1}>
                <View style={styles.btnestado}>
                  <Text style={styles.txtbtnestado}>Seleccionar</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.formestado}>
              <Text style={styles.fontform}>Seleccione el Examen</Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                value={value}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Elige el examen"
                searchPlaceholder="Search..."
                onChange={item => {
                  setValue(item.value);
                  setEstado(item.label);
                }}
                renderItem={renderItem}
              />
              <TouchableHighlight onPress={onPress}>
                <View style={styles.btnestado}>
                  <Text style={styles.txtbtnestado}>Seleccionar</Text>
                </View>
              </TouchableHighlight>
            </View>
            <Text style={styles.textStyle}>Ingrese los resultados</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={styles.Tarea}
              type="text"
              onChangeText={setResultado}></TextInput>
          </View>

          <TouchableOpacity onPress={createPDF}>
            <View style={styles.cradoc}>
              <Image
                source={{
                  uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/pdf.png',
                }}
                style={styles.imageStyle}
              />

              <Text style={styles.textStyle}>Crear PDF con los Resultados</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Archivo;

const styles = StyleSheet.create({
  fontform: {
    fontSize: 20,
    color: 'black',
  },
  dropdown: {
    margin: 16,
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    borderColor: 'green',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  formestado: {
    borderRadius: 10,
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 1,
    marginBottom: 10,
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
    width: 50,
    height: 50,
    marginBottom: 5,

    resizeMode: 'stretch',
  },
  campos: {
    minHeight: '50%',

    width: '80%',
  },
  Tipunt: {
    borderWidth: 1,
    borderColor: 'green',
    color: 'black',
  },
  Tarea: {
    borderWidth: 1,
    textAlign: 'left',
    color: 'black',

    borderColor: 'green',
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
  },
  btnestado: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 5,
    width: 100,
    borderRadius: 5,
    color: '#B2D9B2',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  txtbtnestado: {
    textAlign: 'center',
    color: 'black',
  },
  cradoc: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});
