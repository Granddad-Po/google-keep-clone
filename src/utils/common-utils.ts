import {INote} from "../types/types";


export const reorder = (list: INote[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const filtration = (arr: INote[], searchValue: string) => {
    return arr.filter(note => (
        (note.title.toLowerCase() || note.text.toLowerCase()).includes(searchValue.toLowerCase())
    ))
}