import React, {useContext} from 'react';
import {Box, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import Form from "./Form";
import Note from "./Note";
import {DataContext, ValueType} from "../../context/DataProvider";
import Empty from "./Empty";


const DrawerHeader = styled('div')(({theme}) => ({
    ...theme.mixins.toolbar,
}));


const NotesList = () => {

    const {notes} = useContext<ValueType>(DataContext)

    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <Box component='main' sx={{p: 3, width: '100%'}}>
                <DrawerHeader/>
                <Form/>
                {
                    notes.length > 0 ?
                        <Grid container style={{marginTop: 16}}>
                            {
                                notes.map((note) => (
                                    <Grid key={note.id} item>
                                        <Note note={note}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                        :
                        <Empty/>
                }

            </Box>
        </Box>
    );
};

export default NotesList;