import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import toDoReducer from 'ToDoProject/Reducers/Reducer';
import TaskList from 'ToDoProject/Components/TaskList';
import AddTaskMenu from 'ToDoProject/Components/AddTaskMenu';

const store = createStore(toDoReducer);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.headerAndTasksContainer}>
            <View style={styles.header}>
              <Header centerComponent={{ text: 'TODO List', style: { color: '#fff', flex: 8, fontSize: 20, } }} />
            </View>
            <View style={styles.taskContainer}>
              <TaskList />
            </View>
          </View>
          <KeyboardAvoidingView style={styles.taskInputContainer} behavior="padding" enabled>
            <AddTaskMenu />
          </KeyboardAvoidingView>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  headerAndTasksContainer: {
    flex: 10,
  },
  header: {
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
  },
  taskContainer: {
    flex: 1,
  },
  taskInputContainer: {
    flex: 1,
    borderTopColor: '#ddd',
    borderTopWidth: 2,
    bottom: 0,
    borderColor: '#333',
    borderWidth: 3,
  },
});