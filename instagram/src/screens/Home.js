import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: black;
`;

const Content = styled.ScrollView`
    flex: 1;
`;

const Header = styled.View`
    width:100%;
    height:70px;
    background-color: #2c3e50;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: gray;
`;

const Story = styled.View`
    width: 100%;
    height:80px;
    border-bottom-width: 1px;
    border-bottom-color: gray;
`;

const StoryContent = styled.ScrollView`
    flex-direction: row;
`;

const WhiteText = styled.Text`
    color: white;
`;

const Home = () => {
    return (
      <Container>
        <Header>
            <Icon name="camera-outline" size={40} color="white"></Icon>
            <Icon name="logo-instagram" size={40} color="white"></Icon>
            <Icon name="paper-plane" size={40} color="white"></Icon>
        </Header>
        <Story>
            <StoryContent horizontal>
                <WhiteText>photo</WhiteText>
                <WhiteText>phtoo</WhiteText>

            </StoryContent>
        </Story>


        <Content>
            <WhiteText>ssss</WhiteText>
        </Content>
      </Container>
    );
  }
  


  export default Home;