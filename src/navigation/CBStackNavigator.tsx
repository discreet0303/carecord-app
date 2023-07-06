import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CBStackParamList, CBStackRouteEnum } from './types/CBStackNavigator.types';
import CBRecordsScreen from '../screens/cb/CBRecordsScreen';
import CBQuestionGroupScreen from '../screens/cb/CBQuestionGroupScreen';
import CBQuestionScreen from '../screens/cb/CBQuestionScreen';
import CreateCBRecordScreen from '../screens/cb/CreateCBRecordScreen';
import EditCBOptionScreen from '../screens/cb/EditCBOptionScreen';

const CBStack = createNativeStackNavigator<CBStackParamList>();

function CBStackNavigator() {
  return (
    <CBStack.Navigator>
      <CBStack.Screen name={CBStackRouteEnum.CBRecords} component={CBRecordsScreen} />
      <CBStack.Screen name={CBStackRouteEnum.CBQuestionGroup} component={CBQuestionGroupScreen} />
      <CBStack.Screen name={CBStackRouteEnum.CBQuestion} component={CBQuestionScreen} />
      <CBStack.Screen name={CBStackRouteEnum.CreateCBRecord} component={CreateCBRecordScreen} />
      <CBStack.Screen name={CBStackRouteEnum.EditCBOption} component={EditCBOptionScreen} />
    </CBStack.Navigator>
  );
}

export default CBStackNavigator;
