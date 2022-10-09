import React, {useContext} from 'react';
import {Box, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import DeleteNote from "./DeleteNote";
import {DataContext, ValueType} from "../../context/DataProvider";
import Empty from "../notes/Empty";


const DrawerHeader = styled('div')(({theme}) => ({
    ...theme.mixins.toolbar,
}));


const DeleteList = () => {

    const {deletedNotes} = useContext<ValueType>(DataContext)

    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <Box component='main' sx={{p: 3, width: '100%'}}>
                <DrawerHeader/>
                {
                    deletedNotes.length > 0 ?
                        <Grid container style={{marginTop: 16}}>
                            {
                                deletedNotes.map((note) => (
                                    <Grid key={note.id} item>
                                        <DeleteNote note={note}/>
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

export default DeleteList;