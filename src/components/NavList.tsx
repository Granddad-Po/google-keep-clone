import React, {FC} from 'react';
import {ListItem, ListItemButton, ListItemText, List} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import {LightbulbOutlined as LightIcon} from '@mui/icons-material';
import {ArchiveOutlined as ArchiveIcon} from '@mui/icons-material';
import {DeleteOutlineOutlined as TrashIcon} from '@mui/icons-material';


interface IBoolean {
    open: boolean
}

const NavList: FC<IBoolean> = ({open}) => {
    const navList = [
        {id: 1, name: 'Notes', icon: <LightIcon/>},
        {id: 2, name: 'Archive', icon: <ArchiveIcon/>},
        {id: 3, name: 'Trash', icon: <TrashIcon/>}
    ]
    
    return (
        <List>
            {navList.map(({id, name, icon}, index) => (
                <ListItem key={id} disablePadding sx={{display: 'block'}}>
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
                        <ListItemText primary={name} sx={{opacity: open ? 1 : 0}}/>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default NavList;