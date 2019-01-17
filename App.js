import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import TopPannel from 'ToDoProject/Components/TopPannel';
import AddTaskMenu from 'ToDoProject/Components/AddTaskMenu'
import TaskList from 'ToDoProject/Components/TaskList';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { key: 'task1' },
        { key: 'task2' },
        { key: 'task3' },
        { key: 'task4' },
        { key: 'task5' },
        { key: 'task6' },
        { key: 'task7' },
        { key: 'task8' },
        { key: 'task9' },
        { key: 'task10' },
        { key: 'task11' },
        { key: 'task12' },
        { key: 'task13' },
        { key: 'task14' },
        { key: 'task15' },
        { key: 'task16' },
        { key: 'task17' },
        { key: 'task18' },
      ]
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header
            centerComponent={{ text: 'TODO List', style: { color: '#fff', flex: 8, fontSize: 20, } }}
          />
        </View>
        <View style={styles.taskContainer}>
          <TaskList data={this.state.data}></TaskList>
        </View>
        <KeyboardAvoidingView style={styles.taskInputContainer} behavior="padding" enabled>
          <AddTaskMenu onTaskAdded={(text) => { }} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blanchedalmond',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    width: '100%',
    zIndex: 2,
  },
  taskContainer: {
    flex: 7,
    width: '100%',
    marginBottom: '3%',
  },
  taskInputContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 5,
    bottom: 2,
  },
});