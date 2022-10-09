import React, {useContext} from 'react';
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";
import Form from "./Form";
import Note from "./Note";
import {DataContext} from "../../context/DataProvider";

const DrawerHeader = styled('div')(({theme}) => ({
    ...theme.mixins.toolbar,
}));

const Notes = () => {
    
    const {notes} = useContext(DataContext)
    
    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <Box component='main' sx={{p: 3, width: '100%'}}>
                <DrawerHeader/>
                <Form/>
                {
                    notes.map((note) => <Note />)
                }
            </Box>
        </Box>
    );
};

export default Notes;