import React, {useContext} from 'react';
import {Box, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import Note from "../notes/Note";
import {DataContext, ValueType} from "../../context/DataProvider";
import {filteringNotes} from "../../utils/common-utils";
import FilterEmpty from "./FilterEmpty";


const DrawerHeader = styled('div')(({theme}) => ({
    ...theme.mixins.toolbar,
}));


const Filter = () => {

    const {notes, searchValue} = useContext<ValueType>(DataContext)

    const filteredNotes = filteringNotes(notes, searchValue)

    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <Box component='main' sx={{p: 3, width: '100%'}}>
                <DrawerHeader/>
                {
                    filteredNotes.length > 0
                        ?
                        <Grid container style={{
                            display: 'grid',
                            justifyContent: 'center',
                            gridTemplateColumns: 'repeat(auto-fill, 240px)',
                            gridGap: '10px',
                            justifyItems: 'stretch',
                            alignItems: 'stretch',
                            margin: '20px auto 0',
                        }}
                        >
                            {
                                filteredNotes.map(note => (
                                    <Grid
                                        item
                                        key={note.id}
                                    >
                                        <Note note={note}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                        :
                        <FilterEmpty/>
                }
            </Box>
        </Box>
    )
}

export default Filter;