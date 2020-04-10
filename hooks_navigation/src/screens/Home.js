import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Text, Button, Alert} from 'react-native';



export default ({navigation}) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [showText, setShowText] = useState(false);
  const interval = useRef(null);
  const timeout = useRef(null);
  useEffect(() => console.log('count changed'), [count]);
  useEffect(() => {
    console.log('showText changed');
    if (showText) {
      setTimeout(() => setShowText(false), 2000);
    }
  }, [showText]);
  useEffect(() => {
    console.log('didmount');
  }, []);
  return (
    <SafeAreaView>
      <Button
        title="Add"
        onPress={() => {
          setCount(c => c + 1);
          setShowText(true);
          // setCount(count + 1)
        }}
      />
      <Text>Count: {count}</Text>
      {showText && <Text>Count가 올라갔어요!</Text>}
      <Button
        title="Add2"
        onPress={() => {
          setCount2(c => c + 1);
          // setCount(count + 1)
        }}
      />
      <Text>Count2: {count2}</Text>
      <Button
        title="Trigger Interval"
        onPress={() => {
          interval.current = setInterval(() => {
            console.log('Interval Called');
          }, 1000);
        }}
      />
      <Button
        title="Stop Interval"
        onPress={() => {
          clearInterval(interval.current);
          interval.current = null;
        }}
      />

    <Button
        title="Trigger Alrarm"
        onPress={() => {
          timeout.current = setTimeout(() => {
            Alert(alert("일어나!!"));
          }, 2000);
        }}
      />
    <Button
        title="Stop Alarm"
        onPress={() => {
          clearTimeout(timeout.current);
          timeout.current = null;
        }}
      />


    <Button
        title="Go to Home2"
        onPress={() => {
          navigation.navigate("Home2");
        }}
      />    




    </SafeAreaView>
  );
};