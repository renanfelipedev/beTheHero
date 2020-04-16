import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import colors from '../../utils/colors';
import logoImg from '../../assets/logo.png';

export default function Header() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.header}>
      <Image source={logoImg} />
      <TouchableOpacity onPress={navigateBack}>
        <Feather name="arrow-left" size={24} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
}
