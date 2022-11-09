import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Noticias = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>
        Anuncios/Promociones
      </Text>
      <Image style={styles.img} source={require('../recursos/doctor-img.jpg')} />
      <Text style={styles.paragraph}></Text>
      <Image style={styles.img} source={require('../recursos/lab-img.jpg')} />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    height: 450,
    backgroundColor: '#F5EEF8'
  },
  headText: {
    margin: 24,
    marginTop: 0,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    maxHeight: 50
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    maxHeight: 50
  },
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: 150
  }
});

export default Noticias;