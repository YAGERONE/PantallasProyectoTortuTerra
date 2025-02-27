import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navegacion/Navegacion';
import Header from '../componentes/Header';
import Button from '../componentes/Boton';

// Definimos el tipo para la propiedad `navigation`
type CatalogScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Catalog'>;

// Definimos las propiedades del componente
interface CatalogScreenProps {
  navigation: CatalogScreenNavigationProp;
}

const CatalogScreen: React.FC<CatalogScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Catálogo" />
      <Button
        title="Ir al Perfil"
        onPress={() => navigation.navigate('Profile')}
        type="primary"
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
});

export default CatalogScreen;