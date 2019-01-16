import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';

export default class AddTaskMenu extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" enabled style={styles.taskMenu}>
                <View style={styles.textInputContainer}>
                    <TextInput placeholder="Enter new task..."
                        style={{ fontSize: 14 }}></TextInput>
                </View>
                <View style={styles.addButtonContainer}>
                    <TouchableOpacity
                        style={styles.addButton}>
                        <Text style={{ fontSize: 20, color: "#fff" }}>+</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    taskMenu: {
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 5,
        bottom: 2,
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