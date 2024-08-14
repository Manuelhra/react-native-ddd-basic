import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/home/HomeScreen';
import {DetailScreen} from '../screens/details/DetailScreen';

type RootNavigationParams = {
  home: undefined;
  details: {movieId: string};
};

const Stack = createStackNavigator<RootNavigationParams>();

export const Navigation = (): React.JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="details" component={DetailScreen} />
    </Stack.Navigator>
  );
};
