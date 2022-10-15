import * as React from 'react';
import { View, StyleSheet, Image, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Iniciar sesion" onPress={() => navigation.navigate('Index')}></Button>
    </View>
  );
}

export default Login;
