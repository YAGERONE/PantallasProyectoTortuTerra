import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.text}>Nombre: [Nombre del Usuario]</Text>
      <Text style={styles.text}>Correo: [Correo del Usuario]</Text>
      <Text style={styles.text}>Teléfono: [Teléfono del Usuario]</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8f5',
  },
  title: {
    fontSize: 32,
    color: '#2a7f68',
    marginBottom: 32,
  },
  text: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 16,
  },
});

export default ProfileScreen;