import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    ScrollView,
    FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import SkillCard from '../components/SkillCard';

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

            <Button onPress={handleNewAddSkill} />

            <Text style={[styles.text, {marginVertical: 50}]}>My Skill</Text>
            <FlatList
                data={mySkill}
                keyExtractor={item => item}
                renderItem={({item}) => <SkillCard skill={item} />}
            />
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
});
