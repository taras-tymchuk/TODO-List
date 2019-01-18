import React from 'react';
import { FlatList } from 'react-native';
import Task from 'ToDoProject/Components/Task'

export default TaskList = (props) => {
    return (
        <FlatList
            data={props.tasks}
            extraData={props.extraData}
            renderItem={({ item }) => <Task onDelete={props.onDelete} taskNumber={item.key} text={item.description}></Task>}
        />
    );
}