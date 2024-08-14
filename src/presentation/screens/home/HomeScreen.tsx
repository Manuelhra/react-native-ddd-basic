import React from 'react';
import {Text, View} from 'react-native';

import {useMovies} from '../../hooks/useMovies';

export const HomeScreen = () => {
  const {movies, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
        }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <Text>{movies[0].title || ''} </Text>
    </View>
  );
};
