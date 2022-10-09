import React from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";

type NoteProps = {
    id: string
    title: string
    text: string
}

const Note: React.FC<NoteProps> = ({id, title, text}) => {
    return (
        <Card>
            <CardContent>
                <Typography>
                    {title}
                </Typography>
                <Typography>
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
                
            </CardActions>
            
        </Card>
    );
};

export default Note;