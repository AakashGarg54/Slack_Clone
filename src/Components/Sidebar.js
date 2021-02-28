import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import {sideItems} from '../data/SidebarData'
import db from '../Firebase'
import AddIcon from '@material-ui/icons/Add'
import {useHistory} from 'react-router-dom'


function Sidebar(props) {

    const history = useHistory();

    const goToChannel = (id) => {
        if(id) {
            history.push(`/room/${id}`)
        }
    }

    const addChannel = () => {
        const ChannelName = prompt("Enter the New Channel Name")  
        if (ChannelName){
            db.collection('Rooms').add({
                Name: ChannelName 
            })
        }      
    }

    return (
        <Container>
            <Workspace>
                <Name>
                    Aakash Garg
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon/>
                </NewMessage>
            </Workspace>
            <MainChannel>
                {
                    sideItems.map(item => (
                        <DefaultChannels>
                            {item.icon}
                            {item.text}
                        </DefaultChannels>
                    ))
                }
                <NewChannel>
                    Channels
                    <AddIcon onClick = {addChannel}/>
                </NewChannel>
                <ChannelContainer>
                    {
                        props.rooms.map(item => (
                            <Channel onClick = {() => goToChannel(item.id)}>
                                # {item.name}
                            </Channel>
                        ))

                    }
                </ChannelContainer>
            </MainChannel>
        </Container>
    )
}
 
export default Sidebar

const Container = styled.div`
    background:rgb(56, 53, 53);
    color:white;
    box-shadow: 1px 1px 0 0 white;
`
const Workspace = styled.div`
    padding-left:10px;
    display: flex;
    align-items:center;
    height:64px;
    justify-content: space-between;
    border-bottom : 1px solid white;
`
const Name = styled.div`
    :hover{
        color:rgb(177, 172, 172);
        cursor:pointer;
    }
`
const NewMessage = styled.div`
    width:36px;
    height:36px;
    background:white;
    color: black;
    fill:black;
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius:50%;
    margin-right:20px;
    cursor:pointer;
`

const MainChannel = styled.div`
    
`
const DefaultChannels = styled.div `
    display: grid;
    grid-template-columns: 15% auto;
    height:28px; 
    align-items: center;
    padding-left:10px;
    padding-top:9px;
    
    cursor: pointer;
    :hover{
        background-color:black;
        padding-down:9px;
    }    
`

const NewChannel = styled.div`
    display:flex;
    padding-top: 20px;
    padding-left : 10px;
    justify-content:space-between;
    align-items:center;
    padding-right:10px;
    cursor: pointer;
`

const ChannelContainer = styled.div`
    padding-top: 12px;
    padding-left:9px;
    cursor: pointer;

`

const Channel = styled.div`
    :hover{
        background-color:black;
    }
`