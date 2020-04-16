import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight * 2,
  },

  messages: {
    backgroundColor: '#FFF',
    padding: 24,
    marginTop: 24,
    flex: 1,
    borderRadius: 8,
  },

  receivedMsg: {
    backgroundColor: 'rgba(153, 153, 153, 0.2)',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },

  receivedMsgText: {
    fontSize: 16,
  },

  sentMsg: {
    backgroundColor: 'rgba(32, 224, 90, 0.2)',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },

  sentMsgText: {
    fontSize: 16,
    textAlign: 'right',
  },

  actions: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },

  messageInput: {
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: '#ddd',
    borderRadius: 24,
    width: '85%',
  },

  sendButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
