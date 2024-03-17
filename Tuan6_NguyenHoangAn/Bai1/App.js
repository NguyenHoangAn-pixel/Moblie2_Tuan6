import React from 'react';
import { View, StyleSheet } from 'react-native';
import Bubbles from './View/Bubbles';

const App = () => {
  return (
    <View style={styles.container}>
      <Bubbles />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
