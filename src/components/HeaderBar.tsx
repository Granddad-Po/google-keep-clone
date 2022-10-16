import React, {FC} from 'react';
import {alpha, AppBar, IconButton, InputBase, Toolbar, Typography} from "@mui/material";
import {Menu as MenuIcon, Search as SearchIcon} from '@mui/icons-material';
import {styled} from "@mui/material/styles";


interface HeaderBarProps {
    handleDrawer: () => void
}

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  color: #5F6367;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Search = styled('div')(({ theme }) => ({
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

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const HeaderBar: FC<HeaderBarProps> = ({handleDrawer}) => {
    const logo = 'https://cdn-icons-png.flaticon.com/512/3320/3320975.png'
    
    return (
            <Header sx={{justifyContent: 'center'}}>
                <Toolbar>
                    <IconButton
                        onClick={handleDrawer}
                        edge="start"
                        sx={{
                            marginRight: '20px',
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={logo} alt='logo' style={{width: 40}}/>
                    <Typography variant='h5' color='inherit' sx={{ml: '25px', fontSize: '24px'}}>
                        Notes
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </Header>
    );
};

export default HeaderBar;