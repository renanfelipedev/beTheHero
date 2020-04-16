import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Header from '../../components/Header';

import styles from './styles';

export default function Chat() {
  const [message, setMessage] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Header />

      <View style={styles.messages}>
        <View style={styles.receivedMsg}>
          <Text style={styles.receivedMsgText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ornare scelerisque urna, eu interdum lorem tincidunt vel. Morbi
            pulvinar augue eget metus pretium, sed pellentesque est consectetur.
            Ut nisi tortor, dapibus vitae dignissim ac, blandit id purus.
            Integer vulputate vitae velit a accumsan. Nullam imperdiet ac ligula
            eu faucibus. Mauris eu commodo enim. Phasellus at placerat velit,
            sed rhoncus justo.
          </Text>
        </View>

        <View style={styles.sentMsg}>
          <Text style={styles.sentMsgText}>
            Mensagem enviada, Mensagem enviada, Mensagem enviada, Mensagem
            enviada,
          </Text>
        </View>
      </View>

      <View style={styles.actions}>
        <TextInput
          style={styles.messageInput}
          placeholder="Digite sua mensagem"
          placeholderTextColor="#999"
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={() => {}}>
          <Feather name="send" color="#FFF" size={16} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
