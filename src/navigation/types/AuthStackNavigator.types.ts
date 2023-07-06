import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackNavigator.types';

export enum AuthStackRouteEnum {
  Logo = 'Logo',
  Login = 'Login',
  Register = 'Register',
  ForgotPassword = 'ForgotPassword',
}

export type AuthStackParamList = {
  [AuthStackRouteEnum.Logo]: undefined;
  [AuthStackRouteEnum.Login]: undefined;
  [AuthStackRouteEnum.Register]: undefined;
  [AuthStackRouteEnum.ForgotPassword]: undefined;
};

export type AuthStackScreenProps<T extends AuthStackRouteEnum> = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList>,
  NativeStackScreenProps<AuthStackParamList, T, 'AuthStack'>
>;
