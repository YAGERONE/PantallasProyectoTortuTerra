import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navegacion/Navegacion';
import Header from '../componentes/Header';
import Button from '../componentes/Boton';

// Definimos el tipo para la propiedad `navigation`
type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

// Definimos las propiedades del componente
interface RegisterScreenProps {
  navigation: RegisterScreenNavigationProp;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [preguntaSecreta, setPreguntaSecreta] = useState('');

  const handleRegister = () => {
    // Simulación de registro
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Header title="TortuTerra" />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        value={apellidos}
        onChangeText={setApellidos}
      />
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
      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
      />
      <TextInput
        style={styles.input}
        placeholder="Pregunta Secreta"
        value={preguntaSecreta}
        onChangeText={setPreguntaSecreta}
      />
      <Button title="Registrarse" onPress={handleRegister} type="primary" />
      <Button
        title="¿Ya tienes una cuenta? Inicia Sesión"
        onPress={() => navigation.navigate('Login')}
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

export default RegisterScreen;