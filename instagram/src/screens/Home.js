import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components';
import Ionicon from 'react-native-vector-icons/Ionicons';

import UnitContent from '../components/UnitContent';

const Container = styled.SafeAreaView`
    background-color: black;
`;

const Content = styled.ScrollView`
    width: 100%;
    height: 100%;
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

const StoryInner = styled.View`
    width: 50px;
    height: 50px;
    backgroundColor: #bdc3c7;
    border-radius: 75px;
`;

const StoryOuter = styled.View`
    padding: 5px;
    width: 60px;
    height: 60px;
    backgroundColor: white;
    border-radius: 80px;
    margin: 10px;
`;

const Home = () => {
    return (
      <Container>
        <Header>
            <Ionicon name="ios-camera" size={40} color="white"></Ionicon>
            <Ionicon name="logo-instagram" size={40} color="white"></Ionicon>
            <Ionicon name="ios-paper-plane" size={40} color="white"></Ionicon>
        </Header>
        <Story>
            <StoryContent horizontal>
                <View style={{justifyContent: 'center'}}>
                    <StoryOuter>
                        <StoryInner/>
                    </StoryOuter>
                </View>
                <View style={{justifyContent: 'center'}}>
                    <StoryOuter>
                        <StoryInner/>
                    </StoryOuter>
                </View>
                <View style={{justifyContent: 'center'}}>
                    <StoryOuter>
                        <StoryInner/>
                    </StoryOuter>
                </View>
                <View style={{justifyContent: 'center'}}>
                    <StoryOuter>
                        <StoryInner/>
                    </StoryOuter>
                </View>
                <View style={{justifyContent: 'center'}}>
                    <StoryOuter>
                        <StoryInner/>
                    </StoryOuter>
                </View>
            </StoryContent>
        </Story>


        <Content>
            <UnitContent/>
        </Content>
      </Container>
    );
  }
  


  export default Home;