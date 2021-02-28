import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../Firebase'

function Login(props) {

    const SignIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {
            const newUser = {
                name : result.user.displayName,
                photo : result.user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            props.setUser(newUser)
        })

        .catch(err => {
            alert(err.message)
        })
    }


    return (
        <Container>
            <Content>
                <SlackImg src = 'http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png ' />
                <h1> Sign In Slack </h1>
                <SignInButton onClick={() => SignIn()}>
                    Sign In with Google
                </SignInButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div `
    height : 100vh;
    width : 100%;
    background : #f8f8f8;
    display: flex;
    justify-content : center;
    align-items : center;

`
const Content = styled.div` 
    background : white;
    padding:100px;
    border-radius : 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%),0 1px 2px rgb(0 0 0 / 24%)
`

const SlackImg = styled.img` 
    height: 100px;
    

`
const SignInButton = styled.button`
    margin-top: 50px;
    background-color: #a154s4;
    border: none;
    height:40px;
    border-radius:10px;
    cursor: pointer;
    font-size : 16px;
    :hover{
        background-color: green;
        color : white;
    }
`  
