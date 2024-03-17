import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cat from './Test/Cat';

const App = () => {
  return (
    <View style={styles.container}>
      <Cat />
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
