import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList, RootStackRouteEnum } from './types/RootStackNavigator.types';
import AuthStackNavigator from './AuthStackNavigator';
import MainTabNavigator from './MainTabNavigator';

const RootStack = createNativeStackNavigator<RootStackParamList>();

function RootStackNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName={RootStackRouteEnum.AuthStack}
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen name={RootStackRouteEnum.AuthStack} component={AuthStackNavigator} />
      <RootStack.Screen name={RootStackRouteEnum.MainTab} component={MainTabNavigator} />
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
