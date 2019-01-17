import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';

export default class AddTaskMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isDisabled: true,
        }
    }

    submitAndClear = () => {
        this.props.onTaskAdded(this.state.text);

        this.setState({
            text: '',
            isDisabled: true,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={{ fontSize: 14 }}
                        onChangeText={(inputText) => this.setState({
                            text: inputText,
                            isDisabled: inputText == '' ? true : false,
                        })}
                        value={this.state.text}
                        placeholder="Enter new task..."
                        clearButtonMode="always"
                    />
                </View>
                <View style={styles.addButtonContainer}>
                    <TouchableOpacity
                        style={[styles.addButton, { opacity: this.state.isDisabled ? 0.3 : 1 }]}
                        onPress={this.submitAndClear}
                        disabled={this.state.isDisabled}>
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
        flex: 1,
    },
    textInputContainer: {
        flex: 3,
    },
    addButtonContainer: {
        flex: 1,
        alignItems: 'center',
    },
    addButton: {
        alignItems: 'center',
        backgroundColor: '#00f',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 40,
        height: 40,
    },
});