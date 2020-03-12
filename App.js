import store from './src/store'
import TodoApp from './src/TodoApp'
import { Provider } from 'react-redux'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
