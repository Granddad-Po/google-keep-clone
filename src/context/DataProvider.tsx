import React, {createContext, PropsWithChildren, useState} from 'react';

export const DataContext = createContext({} as ValueType)

interface ValueType {
    notes: Array<object>
    setNotes: Function
    archiveNotes: Array<object>
    setArchiveNotes: Function
    deletedNotes: Array<object>
    setDeletedNotes: Function
}

const DataProvider: React.FC<PropsWithChildren> = ({children}) => {
    
    const [notes, setNotes] = useState<Array<object>>([])
    const [archiveNotes, setArchiveNotes] = useState<Array<object>>([])
    const [deletedNotes, setDeletedNotes] = useState<Array<object>>([])
    
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