import React, {FC, useContext} from 'react';
import {Box, Button, Card, CardActions, CardContent, IconButton, Modal, Tooltip, Typography} from "@mui/material";
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

const styleModal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
};

const DeleteNote: FC<NoteProps> = ({note}) => {

    const {deletedNotes, setNotes, setDeletedNotes} = useContext(DataContext)
    const [onModal, setOnModal] = React.useState(false);
    const handleOpen = () => setOnModal(true);
    const handleClose = () => setOnModal(false);

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
                        onClick={handleOpen}
                    >
                        <DeleteForever
                            fontSize="small"
                        />
                    </IconButton>
                </Tooltip>
                <Modal
                    open={onModal}
                    onClose={handleClose}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <Box sx={styleModal}>
                        <Typography id="modal-title" variant="h6" component="h2">
                            Delete note forever?
                        </Typography>
                        <Box id="modal-description" sx={{ display: 'flex', justifyContent: 'right', mt: 2}}>
                            <Button onClick={handleClose} sx={{ml: 'auto', mr: '10px'}} variant="text">Cancel</Button>
                            <Button onClick={() => deleteNote(note)} variant="text">Delete</Button>
                        </Box>
                    </Box>
                </Modal>
            </CardActions>
        </StyledCard>
    );
};

export default DeleteNote;