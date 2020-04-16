import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
  Linking,
} from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import Header from '../../components/Header';

import styles from './styles';
import colors from '../../utils/colors';
import logoImg from '../../assets/logo.png';
import formatCurrency from '../../utils/formatCurrency';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso: ${
    incident.title
  } com o valor de ${formatCurrency(incident.value)}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendWhatsapp() {
    Linking.openURL(`https://wa.me/${incident.whatsapp}&text=${message}`);
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function openChat() {
    navigation.navigate('Chat');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>ONG </Text>
        <Text style={styles.incidentValue}>{incident.name}</Text>

        <Text style={styles.incidentProperty}>CASO </Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR </Text>
        <Text style={styles.incidentValue}>
          {formatCurrency(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Feather name="message-circle" color={colors.primary} size={16} />
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Feather name="mail" color={colors.primary} size={16} />
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chat}>
          <TouchableOpacity style={styles.chatButton} onPress={openChat}>
            <Feather name="send" color="#FFF" size={16} />
            <Text style={styles.chatButtonText}>Enviar mensagem</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
