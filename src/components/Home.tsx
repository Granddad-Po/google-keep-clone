import React from 'react';
import {Box} from "@mui/material";
import SwiperDrawer from "./SwiperDrawer";
import Notes from "./notes/NotesList";
import Archive from "./archive/ArchiveList";
import Trash from "./trash/DeleteList";
import {Routes, Route} from "react-router-dom";

const Home = () => {
    return (
        <Box style={{display: 'flex', width: '100%'}}> 
            <SwiperDrawer/>
                <Routes>
                    <Route path='/' element={<Notes/>}/>
                    <Route path='/archive' element={<Archive/>}/>
                    <Route path='/trash' element={<Trash/>}/>
                </Routes>
        </Box>
    );
};

export default Home;