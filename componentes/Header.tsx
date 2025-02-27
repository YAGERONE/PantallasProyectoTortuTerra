import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4caf92', // Verde natural
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    color: '#ffffff', // Blanco
    fontSize: 24, // 1.5rem (24px)
    fontFamily: 'Arial, sans-serif', // Tipografía Sans-serif
    fontWeight: 'bold',
  },
});

export default Header;