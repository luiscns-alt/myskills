import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity,
} from 'react-native';

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkill, setMySkill] = useState([]);

    function handleNewAddSkill() {
        setMySkill(oldState => [...oldState, newSkill]);
        console.log(mySkill);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome, Luis Carlos</Text>
            <TextInput
                style={styles.textInput}
                placeholder="New Skill"
                placeholderTextColor="#999"
                onChangeText={setNewSkill}
            />
            <TouchableOpacity
                style={styles.touchableOpacity}
                activeOpacity={0.7}
                onPress={handleNewAddSkill}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <Text style={[styles.text, {marginVertical: 50}]}>My Skill</Text>
            {mySkill.map((skill, index) => (
                <TouchableOpacity key={index} style={styles.buttonSkill}>
                    <Text style={styles.textSkill}>{skill}</Text>
                </TouchableOpacity>
            ))}
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
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 5,
    },
    textSkill: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
});
