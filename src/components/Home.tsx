import React from 'react';
import {Box} from "@mui/material";
import SwiperDrawer from "./SwiperDrawer";
import Notes from "./notes/Notes";

const Home = () => {
    return (
        <Box style={{display: 'flex', width: '100%'}}> 
            <SwiperDrawer/>
            <Notes/>
        </Box>
    );
};

export default Home;