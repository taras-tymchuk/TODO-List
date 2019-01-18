import React from 'react';
import { FlatList } from 'react-native';
import Task from 'ToDoProject/Components/Task'

export default TaskList = (props) => {
    return (
        <FlatList
            data={props.data}
            renderItem={({ item }) => <Task onDelete={props.onDelete} taskNumber={item.key} text={item.description}></Task>}
        />
    );
}