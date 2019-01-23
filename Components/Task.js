import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';

import { setTaskDone, deleteTask } from 'ToDoProject/Actions/ActionCreators';

class Task extends Component {
    render() {
        return (
            <View style={styles.taskContainer}>
                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        title={this.props.text}
                        checked={this.props.isDone}
                        onPress={() => this.props.setTaskDone(this.props.index)}
                        textStyle={this.props.isDone ? styles.textStyleChecked : styles.textStyleUnchecked}
                        containerStyle={{ backgroundColor: '#fff', borderColor: '#fff' }}>
                    </CheckBox>
                </View>
                <View style={styles.deleteButtonContainer}>
                    <TouchableHighlight
                        style={styles.deleteButton}
                        onPress={() => this.props.deleteTask(this.props.index)}>
                        <Text style={{ color: '#f00', fontSize: 24 }}>X</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row', flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignContent: 'center',
        borderBottomColor: '#ddd', borderBottomWidth: 1,
        borderLeftColor: '#00f', borderLeftWidth: 2,
    },
    checkBoxContainer: {
        flex: 7,
    },
    deleteButtonContainer: {
        flex: 1,
    },
    deleteButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        borderLeftColor: '#ddd',
        borderLeftWidth: 2,
    },
    textStyleChecked: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    textStyleUnchecked: {
        color: '#000',
        textDecorationLine: 'none',
    },
});

const mapDispatchToProps = {
    setTaskDone,
    deleteTask,
}

const mapStateToProps = () => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
