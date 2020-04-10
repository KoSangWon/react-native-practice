import React, {useState} from 'react';

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChangeText = value => {
        setValue(value);
    }
    return {value, onChangeText};
};
