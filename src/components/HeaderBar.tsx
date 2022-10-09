import React, {FC} from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
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
                </Toolbar>
            </Header>
    );
};

export default HeaderBar;