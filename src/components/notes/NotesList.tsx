import React, {useContext} from 'react';
import {Box, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import Form from "./Form";
import Note from "./Note";
import {DataContext, ValueType} from "../../context/DataProvider";
import Empty from "./Empty";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {reorder} from "../../utils/common-utils";


const DrawerHeader = styled('div')(({theme}) => ({
    ...theme.mixins.toolbar,
}));


const NotesList = () => {

    const {notes, setNotes} = useContext<ValueType>(DataContext)

    const onDragEnd = (result: any) => {
        if (!result.destination)
            return;

        const items = reorder(notes, result.source.index, result.destination.index);
        setNotes(items);
    }

    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <Box component='main' sx={{p: 3, width: '100%'}}>
                <DrawerHeader/>
                <Form/>
                {
                    notes.length > 0 ?
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="droppable">
                                {(provided, snapshot) => (
                                    <Grid  container style={{display: 'flex', justifyContent: 'space-between', marginTop: 16}}
                                          {...provided.droppableProps}
                                          ref={provided.innerRef}
                                    >
                                        {
                                            notes.map((note, index) => (
                                                <Draggable key={note.id} draggableId={note.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <Grid key={note.id} item
                                                              ref={provided.innerRef}
                                                              {...provided.draggableProps}
                                                              {...provided.dragHandleProps}
                                                        >
                                                            <Note note={note}/>
                                                        </Grid>
                                                    )}
                                                </Draggable>
                                            ))
                                        }
                                    </Grid>
                                )}
                            </Droppable>
                        </DragDropContext>
                        :
                        <Empty/>
                }
            </Box>
        </Box>
    )
}

export default NotesList;