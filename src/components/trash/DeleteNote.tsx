import React, {FC, useContext} from 'react';
import {Card, CardActions, CardContent, IconButton, Tooltip, Typography} from "@mui/material";
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

    const {deletedNotes, setNotes, setDeletedNotes} = useContext(DataContext)

    const restoreNote = (note: INote) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id)
        setDeletedNotes(updatedNotes)

        setNotes((prevArr: INote[]) => [note, ...prevArr])
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
                <Tooltip title={'Restore'}>
                    <IconButton
                        style={{marginLeft: 'auto'}}
                        onClick={() => restoreNote(note)}
                    >
                        <RestoreFromTrash
                            fontSize="small"
                        />
                    </IconButton>
                </Tooltip>
                <Tooltip title={'Delete forever'}>
                    <IconButton
                        onClick={() => deleteNote(note)}
                    >
                        <DeleteForever
                            fontSize="small"
                        />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </StyledCard>
    );
};

export default DeleteNote;