import React from 'react'
import styled from 'styled-components'

function ChatMessage({text, name, image, timestamp}) {
    
    return (
        <Container>
            <UserAvatar>
                <img src = {image} />
            </UserAvatar>
            <MessageContainer>
                <Name>
                    {name}
                    <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>
                    {text}
                </Text>
            </MessageContainer>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding : 8px 20px;
    display : flex;
    align-items : center;
    align-self:auto;
    justify-content : end;    
    : hover {
        background : rgba(206, 197, 197, 0.253);
    }
`
const UserAvatar = styled.div`

    width: 36px;
    height : 36px;
    border-radius : 2px;
    margin-right : 8px;
    overflow : hidden;
    img{
        width : 100%;
    }
`

const MessageContainer = styled.div`
    display : flex;
    flex-direction : column;
 
`
const Name = styled.span`
    font-weight : 900;
    font-size : 16px;
    line-height: 1.4;
    span{
        padding-left : 8px; 
        font-weight: 400;
        color : #606060;
        font-size : 12px;
    }

`
const Text = styled.span``