import React, {useState} from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import ListIcon from '@material-ui/icons/List';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import FormatClearIcon from '@material-ui/icons/FormatClear';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';


function ChatInput({ sendMessage }) {

    const [input, setInput] = useState("")

    const send = (e) => {
        e.preventDefault();
        // this is used sothat the page can't refresh and e is a event
        
        if(!input) return;
        sendMessage(input)
        setInput("")
    }

    return (
        <Container>
            <InputContainer>
                <form>
                    <input onChange={(e)=>setInput(e.target.value )} type="text" placeholder='Message Here...' value = {input}/>
                    <SendButton type = "submit" onClick = {send}>
                        <Send/>
                    </SendButton>
                </form>
                <Buttons>
                    <Formating>
                        < FormatBoldIcon />
                        <FormatItalicIcon />
                        <ListIcon />
                        <FormatSizeIcon />
                        <FormatClearIcon />
                    </Formating>
                    <Extra>
                        <CodeOutlinedIcon />
                        <EmojiEmotionsOutlinedIcon />
                    </Extra>
                </Buttons>
            </InputContainer>
        </Container>
    )
}

export default ChatInput


const Container = styled.div`

    padding-left : 15px;
    padding-right: 15px;
    padding-bottom: 15px;

    
`
const InputContainer = styled.div`
    border: 1px solid black;
    border-radius : 10px;
    form{
        display: flex;
        height : 42px;
        align-items : center;
        padding-left: 10px; 
        input{
            flex: 1;
            border: none;
            font-size : 15px;
        }

        input: focus {
            outline: none;
        }
    }
`

const SendButton = styled.button`
    background : green;
    border-radius : 2px;
    width : 32px;
    height : 32px;
    display: flex;
    align-items : center;
    justify-content: center;
    margin-right : 5px;
    cursor : pointer;
    border: none;
`

const Send = styled(SendIcon)`
    width : 18px;
    color: white;
`
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    padding:0 5px;
    padding-top: 5px;
    margin: 0 5px;
    border-top: 0.5px solid rgba(107, 107, 107, 0.24);
    background: rgba(107, 107, 107, 0.30);
    
`
const Formating = styled.div`
    cursor : pointer;
`

const Extra = styled.div`
    cursor : pointer;
`