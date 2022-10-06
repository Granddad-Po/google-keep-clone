import React from 'react';
import {Box, Button, Paper, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const NoteBar = () => {
    return (
        <Paper sx={{
            width: '400px',
            height: '60px'
        }}
               elevation={3}>
            <Box
                component='form'
                noValidate
            >
                <TextField
                    variant='standard'
                    defaultValue='Введите заголовок'
                />
                <TextField
                    variant='standard'
                    defaultValue='Введите текст'
                />
                <Button>
                    <AddIcon/>
                </Button>
            </Box>
        </Paper>
    );
};

export default NoteBar;