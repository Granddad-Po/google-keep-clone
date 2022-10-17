import {INote} from "../types/types";


export const reorder = (list: INote[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const filteringNotes = (notes: INote[], searchValue: string) => {
    return notes.filter(note => (
        (note.title.toLowerCase() || note.text.toLowerCase()).includes(searchValue.toLowerCase())
    ))
}