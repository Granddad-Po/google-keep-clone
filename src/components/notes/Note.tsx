import React, {FC, useContext} from 'react';
import {Card, CardActions, CardContent, IconButton, Tooltip, Typography} from "@mui/material";
import {ArchiveOutlined, DeleteOutlineOutlined} from '@mui/icons-material';
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
  //margin: 8px;
  box-shadow: none;
`

const Note: FC<NoteProps> = ({note}) => {

    const {notes, setNotes, setArchiveNotes, setDeletedNotes} = useContext(DataContext)

    const archiveNote = (note: INote) => {
        const updatedNotes = notes.filter(data => data.id !== note.id)
        setNotes(updatedNotes)

        setArchiveNotes((prevArr: INote[]) => [note, ...prevArr])
    }

    const deleteNote = (note: INote) => {
        const updatedNotes = notes.filter(data => data.id !== note.id)
        setNotes(updatedNotes)

        setDeletedNotes((prevArr: INote[]) => [note, ...prevArr])
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
                <Tooltip title={'Archive'}>
                    <IconButton
                        style={{marginLeft: 'auto'}}
                        onClick={() => archiveNote(note)}
                    >
                        <ArchiveOutlined
                            fontSize="small"
                        />
                    </IconButton>
                </Tooltip>
                <Tooltip title={'Delete'}>
                    <IconButton
                        onClick={() => deleteNote(note)}
                    >
                        <DeleteOutlineOutlined
                            fontSize="small"
                        />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </StyledCard>
    );
};

export default Note;