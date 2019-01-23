import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import { addTask } from 'ToDoProject/Actions/ActionCreators';

class AddTaskMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isDisabled: true,
        }
    }

    submitAndClear = () => {
        this.props.addTask(this.state.text);

        this.setState({
            text: '',
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(inputText) => this.setState({ text: inputText })}
                        value={this.state.text}
                        placeholder="Enter new task..."
                        clearButtonMode="always"
                    />
                </View>
                <View style={styles.addButtonContainer}>
                    <TouchableOpacity
                        style={[styles.addButton, { opacity: this.state.text.trim() == '' ? 0.3 : 1 }]}
                        onPress={this.submitAndClear}
                        disabled={this.state.text.trim() == ''}>
                        <Text style={{ fontSize: 20, color: "#fff" }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'stretch',
        flex: 1,
    },
    textInputContainer: {
        flex: 3,
    },
    textInput: {
        fontSize: 14,
        justifyContent: 'center',
    },
    addButtonContainer: {
        flex: 1,
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: '#00f',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
    },
});

mapStateToProps = () => {
    return {};
}

mapDispatchToProps = {
    addTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskMenu)