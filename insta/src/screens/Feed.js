import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components';

const StoriesContainer = styled.ScrollView`
    height: 100px;
    background-color: green;
`;

const StoryContainer = styled.View`
    width: 80px;
    height: 100px;
    background-color: red;
    justify-content: center;
    align-items: center;
`;

const Image = styled.Image`
    width: 70px;
    height: 70px;
    background-color: purple;
    border-radius: 35px;
`;

const IdText = styled.Text`

`;

export default ({navigation}) => {

    const stories = [
        {
            id: 'sangwon',
            uri: 'https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg'
        },
        {
            id: 'sangwon2',
            uri: 'https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg'
        }
    ]

    return (
        <ScrollView>
            <StoriesContainer horizontal={true}>
                {stories.map(story => (
                    <StoryContainer>
                    <Image
                        source={{
                                uri: story.uri,
                        }}
                    />
                    <IdText>{story.id}</IdText>
                </StoryContainer>
                ))}
            </StoriesContainer>
        </ScrollView>
    );
}