import React, {useContext} from 'react';
import {Box, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import ArchiveNote from "./ArchiveNote";
import {DataContext, ValueType} from "../../context/DataProvider";
import ArchiveEmpty from "./ArchiveEmpty";


const DrawerHeader = styled('div')(({theme}) => ({
    ...theme.mixins.toolbar,
}));


const ArchiveList = () => {

    const {archiveNotes} = useContext<ValueType>(DataContext)

    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <Box component='main' sx={{p: 3, width: '100%'}}>
                <DrawerHeader/>
                {
                    archiveNotes.length > 0 ?
                        <Grid container style={{marginTop: 16}}>
                            {
                                archiveNotes.map((note) => (
                                    <Grid key={note.id} item>
                                        <ArchiveNote note={note}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                        :
                        <ArchiveEmpty/>
                }
            </Box>
        </Box>
    );
};

export default ArchiveList;