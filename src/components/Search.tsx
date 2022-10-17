import React, {useContext} from 'react';
import {Search as SearchIcon} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
import {InputBase} from "@mui/material";
import {DataContext} from "../context/DataProvider";


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#F5F5F5',
    marginLeft: 0,
    height: '50px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: '200px',
        width: '600px',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            '&:focus': {
                width: '100%',
            },
        },
    },
}));

const SearchBar = () => {
    
    const {setSearchValue} = useContext(DataContext)
    
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{'aria-label': 'search'}}
                onChange={e => setSearchValue(e.target.value)}
            />
        </Search>
    );
};

export default SearchBar;