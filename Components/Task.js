import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: false,
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
                    checked={this.state.isDone}
                    onPress={() => { this.setState({ isDone: !this.state.isDone }) }}
                />

                <TouchableHighlight
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#f00',
                        padding: 10,
                        width: 40,
                        height: 40,
                    }}
                    onPress={null}
                >
                    <Text style={{ color: '#fff', fontSize: 20 }}>X</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
