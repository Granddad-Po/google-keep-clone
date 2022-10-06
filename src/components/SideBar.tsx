import React from 'react';
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";

const SideBar = () => {
    return (
        <aside>
            <List sx={{
                width: '280px',
                height: '100vh'
            }}>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </aside>
    );
};

export default SideBar;