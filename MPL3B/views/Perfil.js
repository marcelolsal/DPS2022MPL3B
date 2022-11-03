/* import React from "react";
import {StyleSheet,Text,View,Image} from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from 'react-native-vector-icons';

export default function Perfil() {
    return(
    <>

   

     <View style={[styles.contenedor,{flexDirection:"column"}]}>

<View style={styles.caja}>
<MaterialCommunityIcons name="home" size={30} color="black"  />
<MaterialIcons name="notifications" style={styles.notificacion} size={30} color="black" />

  </View>
  <View style={styles.caja1}>

</View>


<View style={styles.caja2}>

<Text style={{fontSize:17,paddingLeft:100,left:30}}>Mariella Chicas </Text>

<Image
      source={require('./recursos/img/foto.jpeg')} style={{width:100,height:90,borderRadius:20}}/>

</View>

<View style={styles.caja5}>

</View>
<View style={styles.caja4}>
<Text style={{fontSize:18,paddingLeft:30,}}>Editar Perfil <FontAwesome name="edit" size={25} color="black" /></Text>
<Text style={{fontSize:19,paddingLeft:100,padding:10}}>Informacion Personal</Text>
<Text style={{fontSize:16,padding:3}}>Nombre Completo:</Text>
<Text style={{fontSize:16,padding:3}}>Edad:</Text>
<Text style={{fontSize:16,padding:3}}>Genero:</Text>
<Text style={{fontSize:16,padding:3}}>Fecha de Nacimiento:</Text>
<Text style={{fontSize:16,padding:3}}>Numero de telefono:</Text>
<Text style={{fontSize:16,padding:3}}>Correo Electronico:</Text>
<Text></Text>
</View>
<View style={styles.caja6}>
<Text style={{fontSize:15,textAlign:'center'}}>Derechos reservados<MaterialIcons name="copyright" size={15} color="black" /></Text>

</View>

</View>
 </>
);
};

const styles = StyleSheet.create({
contenedor:{
    backgroundColor:'#b5c8cd',
    padding:3,
   marginVertical:35
},

caja:{
   marginVertical:10,
 minHeight:15,
 flexDirection:'row'
},

caja1:{
  padding:1,
 backgroundColor:'white',

  },
 
  
  caja2:{
  padding:1,
  
  },
  
 

  caja4:{
   padding:14,
   marginVertical:4
  },

  caja5:{
      marginVertical:10,
  padding:1,
 backgroundColor:'white',
  
  },

    caja6:{
      marginVertical:150,
     padding:10,
 
  
  },

notificacion:{
right:'1%',
paddingLeft:295
},



});


 */