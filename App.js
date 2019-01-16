import React from 'react';
import { StyleSheet, View } from 'react-native';
import TopPannel from 'ToDoProject/Components/TopPannel';
import AddTaskMenu from 'ToDoProject/Components/AddTaskMenu'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopPannel text="TODO List"></TopPannel>
        <AddTaskMenu />
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
