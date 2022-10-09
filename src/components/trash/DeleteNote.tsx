import React, {FC, useContext} from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import {RestoreFromTrash, DeleteForever} from '@mui/icons-material';
import {INote} from "../../types/types";
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

const DeleteNote: FC<NoteProps> = ({note}) => {

    const {deletedNotes, setArchiveNotes, setDeletedNotes} = useContext(DataContext)

    const recoverNote = (note: INote) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id)
        setDeletedNotes(updatedNotes)

        setArchiveNotes((prevArr: INote[]) => [note, ...prevArr])
    }

    const deleteNote = (note: INote) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id)
        setDeletedNotes(updatedNotes)
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
                <RestoreFromTrash
                    fontSize="small"
                    style={{marginLeft: 'auto'}}
                    onClick={() => recoverNote(note)}
                />
                <DeleteForever
                    fontSize="small"
                    onClick={() => deleteNote(note)}
                />
            </CardActions>

        </StyledCard>
    );
};

export default DeleteNote;