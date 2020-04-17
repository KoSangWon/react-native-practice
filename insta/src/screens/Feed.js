import React from 'react'
import { SafeAreaView, Text, View, Dimensions } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import TabBar from '../components/TabBar';



//const width = Dimensions.get('screen').width 아래랑 똑같음.
const {width: sWidth} = Dimensions.get('screen');

const StoriesContainer = styled.ScrollView`
    height: 100px;
    background-color: green;
`;

const StoryContainer = styled.View`
    width: 80px;
    height: 100px;
    justify-content: center;
    align-items: center;
`;

const Image = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
`;

const IdText = styled.Text`
    font-weight: bold;
`;

const PostContainer = styled.View`
    width: ${sWidth};
    height: ${sWidth};
    background-color:  lightblue;
`;

const Header = styled.View`
    flex-direction: row;
    background-color: blue;
    padding: 10px;
    align-items: center;
`;

const HeaderImage = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: red;
`;

const HeaderText = styled.Text`
    margin-left: 10px;
`;

const Photo = styled.Image`
    width: ${sWidth}px;
    height: ${sWidth/1.5}px;
`;

const IconContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const Left = styled.View`
    flex-direction: row;
`;


const Footer = styled.View`
`;

const LikeContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

const FooterImage = styled.Image`
    width: 15px;
    height: 15px;
    margin-left: 5px;
    border-radius: 20px;
    background-color: red;
`;

const LikeComment = styled.Text`
    margin-left: 5px;
`;


const CommentContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Comment = styled.Text`
    margin-left: 5px;
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
            <PostContainer>
                <Header>
                    <HeaderImage/>
                    <HeaderText>sangwon</HeaderText>
                </Header>
                <Photo source={{
                    uri: 'https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg'
                }}></Photo>
                <IconContainer>
                    <Left>
                        <MaterialCommunityIcons name="cards-heart" size={30} style={{padding: 5}}/>
                        <MaterialCommunityIcons name="chat" size={30} style={{padding: 5}}/>
                        <SimpleLineIcons name="paper-plane" size={30} style={{padding: 5}}/>
                    </Left>
                    <MaterialCommunityIcons name="bookmark-outline" size={30} style={{padding: 5}}/>


                </IconContainer>

                <Footer>
                    <LikeContainer>
                        <FooterImage/>
                        <LikeComment>sangwon님 외 47명이 좋아합니다.</LikeComment>
                    </LikeContainer>
                    <CommentContainer>
                        <IdText style={{marginLeft:5}}>sangwon</IdText>
                        <Comment>학우 여러분 안녕하세요!</Comment>
                    </CommentContainer>
                </Footer>
            </PostContainer>
            <TabBar/>
        </ScrollView>
    );
}