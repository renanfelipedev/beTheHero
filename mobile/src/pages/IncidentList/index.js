import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';
import api from '../../services/api';
import colors from '../../utils/colors';
import logoImg from '../../assets/logo.png';
import formatCurrency from '../../utils/formatCurrency';

export default function IncidentList() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    fetchIncidents();
  }, []);

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  async function fetchIncidents() {
    if (loading) return;
    if (total > 0 && incidents.length === total) return;

    setLoading(true);
    const response = await api.get('/incidents');
    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setLoading(false);
  }

  function renderItem({ item: incident }) {
    return (
      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>ONG </Text>
        <Text style={styles.incidentValue}>{incident.name}</Text>

        <Text style={styles.incidentProperty}>CASO </Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR </Text>
        <Text style={styles.incidentValue}>
          {formatCurrency(incident.value)}
        </Text>

        <TouchableOpacity
          style={styles.detailButton}
          onPress={() => navigateToDetail(incident)}
        >
          <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
          <Feather name="arrow-right" size={16} color={colors.primary} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#333" />
        </View>
      ) : (
        <FlatList
          data={incidents}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
          onRefresh={fetchIncidents}
          refreshing={loading}
          style={styles.incidentList}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}
