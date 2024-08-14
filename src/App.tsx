import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Navigation} from './presentation/navigation/Navigation';

export const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};
