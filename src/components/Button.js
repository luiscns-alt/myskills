import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function Button({onPress}) {
    return (
        <TouchableOpacity
            style={styles.touchableOpacity}
            activeOpacity={0.7}
            onPress={onPress}>
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchableOpacity: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
    },
});
