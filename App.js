import React, { Component } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Alert, FlatList } from 'react-native';
import AddTaskMenu from 'ToDoProject/Components/AddTaskMenu'
import TaskList from 'ToDoProject/Components/TaskList';
import { Header } from 'react-native-elements';
import Task from 'ToDoProject/Components/Task';
import AppearingTextInput from 'ToDoProject/Components/AppearingTextInput';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.id = 0;
    this.taskList = [];
    this.state = {
      tasks: this.taskList,
      isInputVisible: false,
    }
  }

  addTask = (task) => {
    if (task != '') {
      this.taskList.push({
        key: this.id.toString(),
        description: task,
        isDone: false
      });
      this.setState({
        tasks: this.taskList,
      });
      this.id++;
    }
  }

  onDelete = (taskNumber) => {
    for (var i = 0; i < this.taskList.length; ++i) {
      if (this.taskList[i].key === taskNumber) {
        this.taskList.splice(i, 1);
        break;
      }
    }

    this.setState({
      tasks: this.taskList,
    });
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
          <TaskList
            onDelete={this.onDelete}
            tasks={this.state.tasks}
            extraData={this.state}
          />
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