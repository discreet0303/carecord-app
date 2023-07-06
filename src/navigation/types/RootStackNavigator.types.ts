import { NavigatorScreenParams } from '@react-navigation/native';
import { AuthStackParamList } from './AuthStackNavigator.types';
import { CBStackParamList } from './CBStackNavigator.types';
import { CBUserStackParamList } from './CBUserStackNavigator.types';
import { MainTabParamList } from './MainTabNavigator.types';

export enum RootStackRouteEnum {
  AuthStack = 'AuthStack',
  MainTab = 'MainTab',
  CBStack = 'CBStack',
  CBUserStack = 'CBUserStack',
}

export type RootStackParamList = {
  [RootStackRouteEnum.AuthStack]: NavigatorScreenParams<AuthStackParamList>;
  [RootStackRouteEnum.MainTab]: NavigatorScreenParams<MainTabParamList>;
  [RootStackRouteEnum.CBStack]: NavigatorScreenParams<CBStackParamList>;
  [RootStackRouteEnum.CBUserStack]: NavigatorScreenParams<CBUserStackParamList>;
};
