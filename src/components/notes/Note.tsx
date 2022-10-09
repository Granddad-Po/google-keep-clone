import React, {FC, useContext} from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import { ArchiveOutlined, DeleteOutlineOutlined } from '@mui/icons-material';
import {INote} from "../../types";
import {styled} from "@mui/material/styles";
import {DataContext} from "../../context/DataProvider";


interface NoteProps {
    note: INote
}

const StyledCard = styled(Card)`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
  box-shadow: none;
`

const Note: FC<NoteProps> = ({note}) => {
    
    const {notes, setNotes, setArchiveNotes, setDeletedNotes} = useContext(DataContext)
    
    const archiveNote = (note: INote) => {
        const updatedNotes = notes.filter(data => data.id !== note.id)
        setNotes(updatedNotes)
        
        setArchiveNotes(note)
    }
    
    const deleteNote = (note: INote) => {
        const updatedNotes = notes.filter(data => data.id !== note.id)
        setNotes(updatedNotes)
        
        setDeletedNotes(note)
    }
    
    return (
        <StyledCard>
            <CardContent>
                <Typography>
                    {note.title}
                </Typography>
                <Typography>
                    {note.text}
                </Typography>
            </CardContent>
            <CardActions>
                <ArchiveOutlined
                    fontSize="small"
                    style={{ marginLeft: 'auto' }}
                    onClick={() => archiveNote(note)}
                />
                <DeleteOutlineOutlined
                    fontSize="small"
                    onClick={() => deleteNote(note)}
                />
            </CardActions>
            
        </StyledCard>
    );
};

export default Note;