import React, {FC} from 'react';
import {ListItem, ListItemButton, ListItemText, List} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import {LightbulbOutlined as LightIcon} from '@mui/icons-material';
import {ArchiveOutlined as ArchiveIcon} from '@mui/icons-material';
import {DeleteOutlineOutlined as TrashIcon} from '@mui/icons-material';
import {Link} from 'react-router-dom';


interface IBoolean {
    open: boolean
}

const NavList: FC<IBoolean> = ({open}) => {
    const navList = [
        {id: 1, name: 'Notes', icon: <LightIcon sx={{width: '24px', height: '24px'}}/>, route: '/'},
        {id: 2, name: 'Archive', icon: <ArchiveIcon sx={{width: '24px', height: '24px'}}/>, route: '/archive'},
        {id: 3, name: 'Trash', icon: <TrashIcon sx={{width: '24px', height: '24px'}}/>, route: '/trash'}
    ]

    return (
        <List>
            {
                navList.map(({id, name, icon, route}, index) => (
                    <ListItem key={id} disablePadding sx={{display: 'block'}}>
                        <Link to={route} style={{display: 'flex', color: 'inherit'}}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={name} primaryTypographyProps={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    letterSpacing: '.02rem',
                                    lineHeight: '1.25rem'
                                }} sx={{opacity: open ? 1 : 0}}/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))
            }
        </List>
    );
};

export default NavList;