import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight * 2,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerText: {
    fontSize: 16,
    color: colors.silver,
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 32,
    marginTop: 32,
    marginBottom: 16,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.silver,
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
  },

  incidentList: {
    marginTop: 40,
    marginBottom: 24,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: colors.white,
    marginBottom: 24,
  },

  incidentProperty: {
    fontSize: 16,
    color: colors.darkGray,
    fontWeight: 'bold',
  },

  incidentValue: {
    marginTop: 8,
    marginBottom: 24,
    fontSize: 16,
    color: colors.silver,
  },

  detailButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
