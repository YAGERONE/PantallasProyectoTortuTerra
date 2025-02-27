import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navegacion/Navegacion';
import Header from '../componentes/Header';
import Button from '../componentes/Boton';

// Definimos el tipo para la propiedad `navigation`
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

// Definimos las propiedades del componente
interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulación de inicio de sesión
    navigation.navigate('Catalog');
  };

  return (
    <View style={styles.container}>
      <Header title="TortuTerra" />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} type="primary" />
      <Button
        title="¿No tienes una cuenta? Regístrate"
        onPress={() => navigation.navigate('Register')}
        type="secondary"
      />
      <Button
        title="¿Olvidaste tu contraseña?"
        onPress={() => navigation.navigate('ForgotPassword')}
        type="secondary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f8f5', // Verde muy claro
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#ffffff',
  },
});

export default LoginScreen;