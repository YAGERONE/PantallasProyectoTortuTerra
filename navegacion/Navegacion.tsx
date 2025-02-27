import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import CatalogScreen from '../screens/CatalogScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Definimos las rutas y sus parámetros
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Catalog: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Inicio De Sesion" component={LoginScreen} />
      <Stack.Screen name="Registro" component={RegisterScreen} />
      <Stack.Screen name="Recuperar Contraseña" component={ForgotPasswordScreen} />
      <Stack.Screen name="Catalogo" component={CatalogScreen} />
      <Stack.Screen name="Perfil" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
