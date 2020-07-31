import { useState, useCallback, ChangeEvent } from 'react';

type useInputReturnType = [
    string, 
    React.Dispatch<React.SetStateAction<string>>,
    (e:ChangeEvent<HTMLInputElement>) => void
];
type useInputType = (initialValue?:string) => useInputReturnType;

export const useInput:useInputType = (initialValue) => {
    const [inputValue, setInputValue] = useState<string>(initialValue || "");
    const changeInputValue = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    },[]);

    return [inputValue, setInputValue, changeInputValue];
}