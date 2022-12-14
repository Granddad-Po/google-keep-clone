import React, {createContext, PropsWithChildren, useState} from 'react';
import {INote} from "../types/types";


export const DataContext = createContext({} as ValueType)

export interface ValueType {
    notes: INote[]
    setNotes: Function
    archiveNotes: INote[]
    setArchiveNotes: Function
    deletedNotes: INote[]
    setDeletedNotes: Function
    searchValue: string
    setSearchValue: Function
    filterMode: boolean
    setFilterMode: Function
}

const DataProvider: React.FC<PropsWithChildren> = ({children}) => {
    
    const [notes, setNotes] = useState<INote[]>([])
    const [archiveNotes, setArchiveNotes] = useState<INote[]>([])
    const [deletedNotes, setDeletedNotes] = useState<INote[]>([])
    const [searchValue, setSearchValue] = useState('')
    const [filterMode, setFilterMode] = useState(false)
    
    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setArchiveNotes,
            deletedNotes,
            setDeletedNotes,
            searchValue,
            setSearchValue,
            filterMode,
            setFilterMode,
        }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;