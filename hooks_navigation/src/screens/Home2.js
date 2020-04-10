import React, {useEffect, useRef} from 'react';
import {SafeAreaView, Text} from 'react-native';

export default () => {
    const interval = useRef(null);
    useEffect(() => {
        console.log("Hi Home2");
        interval.current = setInterval(() => {
            console.log("Interval Called");
        }, 1000);
        
        return () => {
            console.log("Bye Home2");
            clearInterval(interval.current);
            interval.current = null;
        }
    }, [])

    return (
        <SafeAreaView>
            <Text>Home2 ~~~~</Text>
        </SafeAreaView>
    )
}