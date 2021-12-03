import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    Button,
    TouchableOpacity,
} from 'react-native';

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome, Luis Carlos</Text>
            <TextInput
                style={styles.textInput}
                placeholder="New Skill"
                placeholderTextColor="#999"
            />
            <TouchableOpacity
                style={styles.touchableOpacity}
                activeOpacity={0.7}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <Text style={[styles.text, {marginTop: 50}]}>My Skills</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30,
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    textInput: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
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
