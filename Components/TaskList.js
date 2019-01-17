import React from 'react';
import { FlatList } from 'react-native';
import Task from 'ToDoProject/Components/Task'

export default TaskList = (props) => {
    return (
        <FlatList
            style={{ backgroundColor: 'red' }}
            data={props.data}
            renderItem={({ item }) => <Task text={item.key}></Task>}
        />
    );
}