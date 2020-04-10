import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {useInput} from '../hook/useInput';

export default () => {
    const [v, setV] = useState('00');
    const {value: v1, onChangeText: onChange1} = useInput('11');
    const {value: v2, onChangeText: onChange2} = useInput('22');


    return (
        <SafeAreaView>
            <TextInput 
                style={{width: 100, backgroundColor: 'green'}}
                value={v}
                onChangeText={value => {
                    setV(value);
                }}
            />
            <TextInput 
                style={{width: 100, backgroundColor: 'green'}}
                value={v1}
                onChangeText={onChange1}
            />
            <TextInput 
                style={{width: 100, backgroundColor: 'green'}}
                value={v2}
                onChangeText={onChange2}
            />
        </SafeAreaView>
    )
}