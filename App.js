import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopPannel from 'ToDoProject/Components/TopPannel';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopPannel text="kjadfhlk;ljf"></TopPannel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blanchedalmond',
    alignItems: 'center',
  },
});
