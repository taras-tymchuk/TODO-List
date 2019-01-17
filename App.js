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
      id: 2,
      tasks: [
        { key: '1', description: 'task1' },
        { key: '2', description: 'task2' },

      ]
    }
  }

  addTask = (task) => {
    if (task != '') {
      this.state.id++;
      this.state.tasks.push({ key: this.state.id.toString(), description: task });
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
          <TaskList data={this.state.tasks}></TaskList>
        </View>
        <KeyboardAvoidingView style={styles.taskInputContainer} behavior="padding" enabled>
          <AddTaskMenu onTaskAdded={this.addTask} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    margin: '5%',
  },
  taskInputContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    borderTopColor: '#ddd',
    borderTopWidth: 2,
    bottom: 2,
  },
});