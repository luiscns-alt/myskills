import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import SkillCard from '../components/SkillCard';

interface SkillData {
    id: string;
    name: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [gretting, setGretting] = useState('');

    function handleNewAddSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill,
        };
        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter(skill => skill.id !== id));
    }

    useEffect(() => {
        const currentHour = new Date().getUTCHours();
        console.log(currentHour);

        if (currentHour < 12) {
            setGretting('Good morning');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGretting('Good afternoon');
        } else {
            setGretting('Good night');
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome, Luis Carlos</Text>
            <Text style={styles.gretings}>{gretting}</Text>
            <TextInput
                style={styles.textInput}
                placeholder="New Skill"
                placeholderTextColor="#999"
                onChangeText={setNewSkill}
            />

            <Button onPress={handleNewAddSkill} title="Add" />

            <Text style={[styles.text, { marginVertical: 50 }]}>My Skill</Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard
                        skill={item.name}
                        onPress={() => handleRemoveSkill(item.id)}
                    />
                )}
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
        alignSelf: 'flex-start',
    },
    textInput: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
    gretings: {
        color: '#FFF',
    },
});
