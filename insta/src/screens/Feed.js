import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>abc</Text>
            <TouchableOpacity 
                style={{width:100, height: 100, backgroundColor: 'green'}}
                onPress={() => navigation.navigate('UserDetail')}/>
        </SafeAreaView>
    );
}