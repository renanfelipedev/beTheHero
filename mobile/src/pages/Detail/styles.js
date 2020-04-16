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
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  incident: {
    backgroundColor: '#FFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 32,
    borderRadius: 8,
    marginBottom: 16,
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

  contactBox: {
    padding: 24,
    marginBottom: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },

  heroTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 32,
    color: colors.black,
  },

  heroDescription: {
    marginTop: 16,
    fontSize: 16,
    color: colors.silver,
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  action: {
    backgroundColor: colors.white,
    borderRadius: 8,
    height: 48,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: colors.primary,
  },

  actionText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },

  chat: {
    marginTop: 10,
  },

  chatButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 48,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  chatButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});
