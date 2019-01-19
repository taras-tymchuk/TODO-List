import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: false,
            textStyle: {
                color: '#000',
                textDecorationLine: 'none',
            },
        }
    }

    deleteTask = () => {
        this.props.onDelete(this.props.taskNumber);
    }

    onDone = () => {
        let done = !this.state.isDone;
        this.state.isDone = !this.state.isDone;

        if (done) {
            this.setState({
                isDone: done,
                textStyle: {
                    color: '#bbb',
                    textDecorationLine: 'line-through',
                }
            });
        }
        else {
            this.setState({
                isDone: done,
                textStyle: {
                    color: '#000',
                    textDecorationLine: 'none',
                }
            });
        }
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row', flex: 1,
                justifyContent: 'space-between',
                borderBottomColor: '#ddd', borderBottomWidth: 1
            }}>
                <CheckBox
                    title={this.props.text}
                    textStyle={this.state.textStyle}
                    checked={this.state.isDone}
                    onPress={this.onDone}
                    containerStyle={{ backgroundColor: '#fff', borderColor: '#fff' }}
                />

                <TouchableHighlight
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#f00',
                        padding: 10,
                        width: 40,
                        height: 40,
                    }}
                    onPress={this.deleteTask}
                >
                    <Text style={{ color: '#fff', fontSize: 20 }}>X</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
