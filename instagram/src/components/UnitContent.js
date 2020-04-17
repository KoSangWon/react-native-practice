import React from 'react';
import styled from 'styled-components';

const WhiteText = styled.Text`
    color: white;
`;

const Profile = styled.View`
    width: 100%
    height: 500px;
    border-bottom-width: 1px;
    border-bottom-color: gray;
`;

const UnitContent = () => {
    return(
        <Profile>
            <WhiteText>게시물공간</WhiteText>
        </Profile> 
    )
}

export default UnitContent;