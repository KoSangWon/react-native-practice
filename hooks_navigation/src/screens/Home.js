import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

export default () => {
    const [count, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [showText, setShowText] = useState(false);
   
    useEffect(() => console.log('didUpdate'));

    useEffect(() => {
        if(showText){
            setTimeout(() => setShowText(false), 2000);
        }
    }) 

    return (
        <SafeAreaView>
            <Button
                title="Add"
                onPress={() => {
                    setCount1(count => count+1);
                    setShowText(true);
                }}
            />
            <Text>Count: {count}</Text>
            {showText && <Text>올라간다!</Text>}
        </SafeAreaView>
    )
}