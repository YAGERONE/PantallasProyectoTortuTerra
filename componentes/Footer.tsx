import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#4caf92', // Verde natural
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  text: {
    color: '#ffffff', // Blanco
    fontSize: 14, // 0.9rem (14px)
    fontFamily: 'Arial, sans-serif', // Tipografía Sans-serif
  },
});

export default Footer;