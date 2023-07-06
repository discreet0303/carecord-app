import React from 'react';
import { Button, Text, View } from 'react-native';
import {
  AuthStackRouteEnum,
  AuthStackScreenProps,
} from '../../navigation/types/AuthStackNavigator.types';

function LoginScreen({ navigation }: AuthStackScreenProps<AuthStackRouteEnum.Login>) {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default LoginScreen;
