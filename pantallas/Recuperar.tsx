import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navegacion/Navegacion';
import Header from '../componentes/Header';
import Button from '../componentes/Boton';

// Definimos el tipo para la propiedad `navigation`
type ForgotPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ForgotPassword'>;

// Definimos las propiedades del componente
interface ForgotPasswordScreenProps {
  navigation: ForgotPasswordScreenNavigationProp;
}

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [preguntaSecreta, setPreguntaSecreta] = useState('');

  const handleRecovery = () => {
    // Simulación de recuperación de contraseña
    alert('Se ha enviado un token a tu correo o se ha verificado la pregunta secreta.');
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
        placeholder="Pregunta Secreta"
        value={preguntaSecreta}
        onChangeText={setPreguntaSecreta}
      />
      <Button title="Recuperar Contraseña" onPress={handleRecovery} type="primary" />
      <Button
        title="Volver a Iniciar Sesión"
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

export default ForgotPasswordScreen;