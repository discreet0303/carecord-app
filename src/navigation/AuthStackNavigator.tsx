import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList, AuthStackRouteEnum } from './types/AuthStackNavigator.types';
import LogoScreen from '../screens/auth/LogoScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName={AuthStackRouteEnum.Logo}
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name={AuthStackRouteEnum.Logo} component={LogoScreen} />
      <AuthStack.Screen name={AuthStackRouteEnum.Login} component={LoginScreen} />
      <AuthStack.Screen name={AuthStackRouteEnum.Register} component={RegisterScreen} />
      <AuthStack.Screen name={AuthStackRouteEnum.ForgotPassword} component={ForgotPasswordScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
