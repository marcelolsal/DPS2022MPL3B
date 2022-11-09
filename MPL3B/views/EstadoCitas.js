import React, { useState } from 'react';
  import { StyleSheet, View, Text, Button, TouchableHighlight, ScrollView} from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
import { TextInput } from 'react-native-gesture-handler';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { set } from 'react-native-reanimated';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  
  const data1 = [
    {usuario:'Juan01', label1: 'Juan Antonio', value1: 'Rodriguez Perez', edad: '25', Genero: 'Masculino' },
    {usuario:'Luis01', label1: 'Luis Manuel', value1: 'Rosales Canales', edad: '26', Genero: 'Masculino' },
    {usuario:'Marlon01', label1: 'Marlon Ricardo', value1: 'Lunin Valladares', edad: '21', Genero: 'Masculino' },
    {usuario:'Juana01', label1: 'Juana Lisa', value1: 'Belloso Blaco', edad: '18', Genero: 'Femenino' },
    {usuario:'Luisa01', label1: 'Luisa Berta', value1: 'Ardon Rodriguez', edad: '17', Genero: 'Femenino' },
    {usuario:'Marlin01', label1: 'Marlin Alejandra', value1: 'Menjivar Esquivelez', edad: '25', Genero: 'Femenino' }
  ];
  const data = [
    { label: 'Pendiente', value: '1' },
    { label: 'En proceso', value: '2' },
    { label: 'Entregado', value: '3' }
  ];
  
  const DropdownComponent = () => {
    const [value, setValue] = useState(null);
    const [value1, setValue1] = useState(null);
    const [estado, setEstado] = useState('');
    const [estado1, setEstado1] = useState('');
    const [edad, setEdad] = useState('');
    const [genero, setGenero]=useState('');
    const [usuario, setUsuario]=useState('');
    const onPress1 = () => {
      console.log(estado1)
      };
    const onPress = () => {
    console.log(estado)
    };
    
    const renderItem1 = (item1: any) => {
      return (
        <View style={styles.item1}>
          <Text style={styles.txtItem1}>{item1.usuario}</Text>
          
        </View>
      );
    };

    const renderItem = (item: any) => {
      return (
        <View style={styles.item}>
          <Text style={styles.txtItem1}>{item.label}</Text>
        </View>
      );
    };
    
    return (
      <>
      <ScrollView style={styles.contprin}>
      <View style={styles.caja1}>
      <View style={styles.head}>
      <Text style={styles.title}>Estado de citas</Text>

      </View>
      <View style={styles.formcitas}>
      <Text style={styles.fontform}>Citas</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data1}
        search
        maxHeight={300}
        labelField="usuario"
        placeholder="Seleccione la cita"
        searchPlaceholder="Search..."
        
        onChange={item1 => {
          setUsuario(item1.usuario);
          setValue1(item1.value1);
          setEstado1(item1.label1);
          setEdad(item1.edad);
          setGenero(item1.Genero);
        }}
        renderItem={renderItem1}
      />
      <TouchableHighlight onPress={onPress1}>
        <View style={styles.btnestado}>
         <Text style={styles.txtbtnestado}>Selecionar</Text> 
        </View>
      </TouchableHighlight>
      <View style={styles.datos}>
        <View style={styles.row}>
          <Text style={styles.txtdatos}>Nombres: </Text>
          <TextInput editable={false} style={styles.txtdatos} value={estado1}></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.txtdatos}>Apellidos: </Text>
          <TextInput editable={false} style={styles.txtdatos} value={value1}></TextInput>
        </View> 
        <View style={styles.row}>
          <Text style={styles.txtdatos}>Edad:        </Text>
          <TextInput editable={false} style={styles.txtdatos} value={edad}></TextInput>
        </View> 
        <View style={styles.row}>
          <Text style={styles.txtdatos}>Contacto: </Text>
          <TextInput editable={false} style={styles.txtdatos} value={genero}></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.txtdatos}>Genero:    </Text>
          <TextInput editable={false} style={styles.txtdatos} value={genero}></TextInput>
        </View>
      </View> 
      </View>
      <View style={styles.formestado}> 
      <Text style={styles.fontform}>Estados</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}

        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Seleccione el estado"
        searchPlaceholder="Search..."
        value={value}
        
        onChange={item => {
          setValue(item.value);
          setEstado(item.label);
        }}
        renderItem={renderItem}
      />
      <TouchableHighlight onPress={onPress}>
        <View style={styles.btnestado}>
         <Text style={styles.txtbtnestado}>Modificar</Text> 
        </View>
      </TouchableHighlight>      
      </View>

      </View>
      </ScrollView>
     
    </>);
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    contprin:{
      backgroundColor: 'green',
      flex: 1,
      flexDirection: 'column',
    },
    caja1: {
      padding: 10,
      backgroundColor: 'white',
      margin: 1,
      borderRadius: 10,
      flex: 1,
      minHeight:770,
    },
    dropdown: {
      margin: 16,
      width: '80%',
      height: 50,
      backgroundColor: 'white',
      borderRadius: 12,
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
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'black'
    },item1:{
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      
    },
    textItem: {
      flex: 1,
      fontSize: 16,
      color: 'black'
    },
    txtItem1:{
      flex: 1,
      fontSize: 16,
      color: 'black'
    },
    placeholderStyle: {
      fontSize: 16,
      color: 'gray'
    },
    selectedTextStyle: {
      fontSize: 16,
      color: 'black'
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      color: 'black'
    },
    title:{
      fontSize: 25,
      color: 'black',
      textAlign: 'center',
      fontWeight:'bold',
    },head:{
      marginTop: 10,
    },
    formcitas:{
      paddingBottom: 20,
      alignItems: 'center',
      justifyContent:'center',
      margin: 20,
      borderRadius: 10,
      borderColor: 'green',
      borderWidth: 1, 
  },
    formestado:{
      paddingBottom: 20,
      alignItems: 'center',
      justifyContent:'center',
      margin: 20,
      borderRadius: 10,
      borderColor: 'green',
      borderWidth: 1, 
  },
  fontform:{
    fontWeight:'bold',
    fontSize: 20,
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },btnestado:{
    borderWidth: 1,
    borderColor: 'green',
    padding: 5,
    width:100,
    borderRadius: 5,
    
  },txtbtnestado:{
    color: 'black',
    textAlign: 'center',
    onPress:{
      color: 'white'
    }
  },
  datos:{
    marginTop:10,
    width: '100%',
    height: 200
  },
  row:{
  flex: 1, 
  flexDirection: 'row',
  },
  txtdatos:{
    color: 'black',
    marginLeft: 10,
  }
  });