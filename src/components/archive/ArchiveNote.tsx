import React, {FC, useContext} from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import {Unarchive, DeleteOutlineOutlined} from '@mui/icons-material';
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

const ArchiveNote: FC<NoteProps> = ({note}) => {

    const {setNotes, archiveNotes, setArchiveNotes, setDeletedNotes} = useContext(DataContext)

    const backNote = (note: INote) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== note.id)
        setArchiveNotes(updatedNotes)

        setNotes((prevArr: INote[]) => [note, ...prevArr])
    }

    const deleteNote = (note: INote) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== note.id)
        setArchiveNotes(updatedNotes)

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
                <Unarchive
                    fontSize="small"
                    style={{marginLeft: 'auto'}}
                    onClick={() => backNote(note)}
                />
                <DeleteOutlineOutlined
                    fontSize="small"
                    onClick={() => deleteNote(note)}
                />
            </CardActions>
        </StyledCard>
    );
};

export default ArchiveNote;