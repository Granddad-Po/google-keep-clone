import React, {createContext, PropsWithChildren, useState} from 'react';
import {INote} from "../types";


export const DataContext = createContext({} as ValueType)

export interface ValueType {
    notes: INote[]
    setNotes: Function
    archiveNotes: INote[]
    setArchiveNotes: Function
    deletedNotes: INote[]
    setDeletedNotes: Function
}

const DataProvider: React.FC<PropsWithChildren> = ({children}) => {
    
    const [notes, setNotes] = useState<INote[]>([])
    const [archiveNotes, setArchiveNotes] = useState<INote[]>([])
    const [deletedNotes, setDeletedNotes] = useState<INote[]>([])
    
    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setArchiveNotes,
            deletedNotes,
            setDeletedNotes,
        }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;