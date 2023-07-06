import React from 'react';
import { View, Text, Button } from 'react-native';
import {
  AuthStackRouteEnum,
  AuthStackScreenProps,
} from '../../navigation/types/AuthStackNavigator.types';
import { RootStackRouteEnum } from '../../navigation/types/RootStackNavigator.types';
import { MainTabRouteEnum } from '../../navigation/types/MainTabNavigator.types';

function LogoScreen({ navigation }: AuthStackScreenProps<AuthStackRouteEnum.Logo>) {
  return (
    <View>
      <Text>Logo Screen</Text>
      <Button title="Go to login" onPress={() => navigation.push(AuthStackRouteEnum.Login)} />
      <Button
        title="Go to tab"
        onPress={() =>
          navigation.push(RootStackRouteEnum.MainTab, {
            screen: MainTabRouteEnum.CBUserList,
          })
        }
      />
    </View>
  );
}

export default LogoScreen;
