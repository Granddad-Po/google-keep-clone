import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import {IconButton, InputBase, Paper} from "@mui/material";
import { styled } from '@mui/material/styles';


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Search = () => {
    return (
        <Paper>
            <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                <SearchIcon/>
            </IconButton>
            <StyledInputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Поиск"
                inputProps={{'aria-label': 'Поиск'}}
            />
        </Paper>
    );
};

export default Search;