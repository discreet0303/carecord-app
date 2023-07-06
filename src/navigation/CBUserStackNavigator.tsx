import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CBUserStackParamList, CBUserStackRouteEnum } from './types/CBUserStackNavigator.types';
import CreateCBUserScreen from '../screens/cb-user/CreateCBUserScreen';
import EditCBUserScreen from '../screens/cb-user/EditCBUserScreen';
import EditCBUserRelationScreen from '../screens/cb-user/EditCBUserRelationScreen';

const CBUserStack = createNativeStackNavigator<CBUserStackParamList>();

function CBUserStackNavigator() {
  return (
    <CBUserStack.Navigator>
      <CBUserStack.Screen name={CBUserStackRouteEnum.CreateCBUser} component={CreateCBUserScreen} />
      <CBUserStack.Screen name={CBUserStackRouteEnum.EditCBUser} component={EditCBUserScreen} />
      <CBUserStack.Screen
        name={CBUserStackRouteEnum.EditCBUserRelation}
        component={EditCBUserRelationScreen}
      />
    </CBUserStack.Navigator>
  );
}

export default CBUserStackNavigator;
