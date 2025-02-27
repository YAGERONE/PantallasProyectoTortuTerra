import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'secondary';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, type = 'primary', style, textStyle }) => {
  const buttonStyle = type === 'primary' ? styles.primaryButton : styles.secondaryButton;
  const textColor = type === 'primary' ? styles.primaryText : styles.secondaryText;

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, textColor, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#2a7f68', // Verde oscuro
  },
  secondaryButton: {
    backgroundColor: '#e0e0e0', // Gris claro
  },
  text: {
    fontSize: 16, // 1rem (16px)
    fontFamily: 'Arial, sans-serif', // Tipografía Sans-serif
    fontWeight: 'bold',
  },
  primaryText: {
    color: '#ffffff', // Blanco
  },
  secondaryText: {
    color: '#333333', // Gris oscuro
  },
});

export default Button;