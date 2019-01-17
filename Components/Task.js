import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
            <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    checked={this.state.isDone}
                    onPress={() => {
                        this.setState({
                            isDone: !this.state.isDone
                        })
                    }}>
                </CheckBox>
                <Text>{this.props.text}</Text>
            </View>
        );
    }
}
