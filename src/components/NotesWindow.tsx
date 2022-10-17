import React, {useContext} from 'react';
import {DataContext, ValueType} from "../context/DataProvider";
import Notes from "./notes/Notes";
import Filter from "./filter/Filter";


const NotesWindow = () => {

    const {searchValue} = useContext<ValueType>(DataContext)

    return (
        <>
            {
                searchValue.length === 0 ?
                <Notes/>
                :
                <Filter/>    
            }
        </>
    )
}

export default NotesWindow;