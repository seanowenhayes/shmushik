/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import settings from '../../navigation/settings';

export type AppProps = {
  componentId: string;
};

function App({componentId}: AppProps): JSX.Element {
  return (
    <SafeAreaView>
      <Button title="settings" onPress={() => settings(componentId)} />
      <Text style={styles.text}>The main app, happy listening</Text>
    </SafeAreaView>
  );
}

App.options = {
  topBar: {
    title: {
      text: 'Welcome',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
  },
});

export default App;
