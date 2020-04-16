import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from './pages/Detail';
import IncidentList from './pages/IncidentList';
import Chat from './pages/Chat';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppStack.Screen name="IncidentList" component={IncidentList} />
        <AppStack.Screen name="Detail" component={Detail} />
        <AppStack.Screen name="Chat" component={Chat} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
