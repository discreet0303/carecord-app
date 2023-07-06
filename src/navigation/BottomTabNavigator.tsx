import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { BottomTabParamList, BottomTabRouteEnum } from './types/BottomTabNavigator.types';
import HomeScreen from '../screens/HomeScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={BottomTabRouteEnum.CBUserList} component={HomeScreen} />
      <BottomTab.Screen name={BottomTabRouteEnum.CBUserCalendar} component={HomeScreen} />
      <BottomTab.Screen name={BottomTabRouteEnum.CBUserExport} component={HomeScreen} />
      <BottomTab.Screen name={BottomTabRouteEnum.Setting} component={HomeScreen} />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
