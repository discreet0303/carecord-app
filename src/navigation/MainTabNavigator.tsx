import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MainTabParamList, MainTabRouteEnum } from './types/MainTabNavigator.types';
import CBUserListScreen from '../screens/main-tab/CBUserListScreen';
import CBUserCalendarScreen from '../screens/main-tab/CBUserCalendarScreen';
import CBUserExportScreen from '../screens/main-tab/CBUserExportScreen';
import SettingScreen from '../screens/main-tab/SettingScreen';

const MainTab = createBottomTabNavigator<MainTabParamList>();

function MainTabNavigator() {
  return (
    <MainTab.Navigator
      initialRouteName={MainTabRouteEnum.CBUserList}
      screenOptions={{ headerShown: false }}
    >
      <MainTab.Screen name={MainTabRouteEnum.CBUserList} component={CBUserListScreen} />
      <MainTab.Screen name={MainTabRouteEnum.CBUserCalendar} component={CBUserCalendarScreen} />
      <MainTab.Screen name={MainTabRouteEnum.CBUserExport} component={CBUserExportScreen} />
      <MainTab.Screen name={MainTabRouteEnum.Setting} component={SettingScreen} />
    </MainTab.Navigator>
  );
}

export default MainTabNavigator;
