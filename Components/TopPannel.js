import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default TopPannel = (props) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.textBox}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#00f',
        borderBottomColor: '#fff',
        borderBottomWidth: 7,
        width: '100%'
    },
    textBox: {
        color: '#fff',
        textAlign: 'left',
        margin: '5%',
        fontSize: 24,
    }
});