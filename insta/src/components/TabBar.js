import React from 'react'
import {Dimensions} from 'react-native';
import styled from 'styled-components';

const {width: sWidth} = Dimensions.get('screen');

const TabBar = styled.View`
    width: ${sWidth};
    height: 100px;
    background-color: lightgreen;
`;

export default () => {
    return <TabBar/>;
};