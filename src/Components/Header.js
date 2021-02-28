import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'

function Header(props) {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type = 'Text' placeholder = 'Search...'/>
                    </Search>
                </SearchContainer>
                <ContactSupportIcon />
            </Main>
            <Userdata>
                <Username onClick = {props.signOut}>
                    {props.user.name}
                </Username>
                <UserImage>
                    <img src = {props.user.photo ? props.user.photo : "http://www.vaishalibookcentre.com/images/no-image-large.png"}/>
                </UserImage>
            </Userdata>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background: black;
    color:white;
    display:flex;
    align-items : center;
    justify-content : center;
    position:relative;
    box-shadow: 1px 1px 0 0 white;
`
const Main = styled.div`
    display: flex;
    margin-left:16px;
    margin-right:16px;
`
const Userdata = styled.div`
    display: flex;
    align-items : center;
    position: absolute;
    right:0;
    padding-right:16px;
`
const SearchContainer = styled.div`
    min-width:400px;
    margin-left:16px;
    margin-right:16px;

`
const Search = styled.div`
    box-shadow: inset 0 0 1px 1px white;
    border-radius: 6px;
    width:100%;
    display: flex;
    align-items:center; 
    input{
        background-color: transparent;
        border: none;
        padding-left : 8px;
        padding-right: 8px;
        color: white;
        padding-top:4px;
        padding-bottom: 4px;
        flex: 1;
    }

    input:focus{
        outline:none;
    }
`// This input is the component is the how to use a css within it.
const Username = styled.div`
    padding-right:16px;
    :hover{
        color:rgb(177, 172, 172);
        cursor:pointer;
    }
`
const UserImage = styled.div`
    width:28px;
    height:28px;
    border : 2px solid white;
    border-radius: 3px;
    cursor:pointer;
    img{
        width : 100%;
        height : 100%;
    }

`