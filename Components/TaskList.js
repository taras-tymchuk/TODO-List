import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';

import Task from 'ToDoProject/Components/Task'

class TaskList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.tasks}
                    renderItem={({ item }) => <Task index={item.index} text={item.text} isDone={item.isDone}></Task>}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={this.props.tasks}
                />
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.map((task, index) => { return { ...task, index: index.toString() } })
    };
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
