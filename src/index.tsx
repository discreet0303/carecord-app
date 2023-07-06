import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import RootStackNavigator from './navigation/RootStackNavigator';

function IndexPage() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default IndexPage;
