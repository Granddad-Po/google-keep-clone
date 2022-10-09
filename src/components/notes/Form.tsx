import React, {useContext, useRef, useState} from 'react';
import {Box, TextField, ClickAwayListener} from "@mui/material";
import {styled} from "@mui/material/styles";
import {DataContext} from "../../context/DataProvider";
import {v4 as uuid} from 'uuid';
import {INote} from "../../types";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 600px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  padding: 10px 15px;
  border-radius: 10px;
  border-color: #e0e0e0;
`

const note: INote = {
    id: '',
    title: '',
    text: ''
}

const Form = () => {

    const {setNotes} = useContext(DataContext)

    const [showTextField, setShowTextField] = useState(false)
    const [addNote, setAddNote] = useState({...note, id: uuid()})

    const containerRef = useRef<any>(null)                                          // FIXED

    const onTextAreaClick = () => {
        setShowTextField(true)
        containerRef.current.style.minHeight = '100px'
    }

    const handleClickAway = () => {
        setShowTextField(false)
        containerRef.current.style.minHeight = '30px'
        setAddNote({...note, id: uuid()});
        
        if (addNote.title || addNote.text) {
            setNotes((prevArr: object[]) => [addNote, ...prevArr])
        }
    }

    const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setAddNote({...addNote, [e.target.name]: e.target.value})
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref={containerRef}>
                {showTextField &&
                <TextField
                    placeholder={'Title'}
                    variant="standard"
                    InputProps={{disableUnderline: true}}
                    style={{marginBottom: 10}}
                    onChange={e => onTextChange(e)}
                    name='title'
                    value={addNote.title}
                />
                }
                <TextField
                    placeholder={'Take a note...'}
                    variant="standard"
                    InputProps={{disableUnderline: true}}
                    multiline
                    maxRows={Infinity}
                    onClick={onTextAreaClick}
                    onChange={e => onTextChange(e)}
                    name='text'
                    value={addNote.text}
                />
            </Container>
        </ClickAwayListener>
    );
};

export default Form;