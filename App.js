import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import KeyboardSpacer from 'react-native-keyboard-spacer';
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
              <Header centerComponent={{
                text: 'TODO List',
                style: {
                  color: '#fff',
                  flex: 8,
                  fontSize: 20,
                }
              }} />
            </View>
            <View style={styles.taskContainer}>
              <TaskList />
            </View>

          </View>
          <View style={styles.taskInputContainer}>
            <AddTaskMenu />
          </View>
          <KeyboardSpacer />
        </View>
      </Provider >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  headerAndTasksContainer: {
    flex: 6,
  },
  header: {
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
  },
  taskContainer: {
    flex: 3,
  },
  taskInputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderTopColor: '#ddd',
    borderTopWidth: 2,
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
  },
});