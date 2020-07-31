import { useState, useCallback, ChangeEvent, FormEvent } from 'react';

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
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

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// useInput

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

interface useFormOption {
    submitFunc:Function,
    requireFunc?:Function,
    require?:boolean,
    preventDefault?:boolean
}

type useStateType = any[];
type submitFuncType = (e:FormEvent<HTMLFormElement>) => void;
type useFormType = (useStateArray:useStateType, option:useFormOption) => submitFuncType;

const isEmpty = (stats:useStateType):boolean => {
    const boolean = stats.reduce((value, state) => value || !!state === false,false);
    return boolean;
}

export const useForm:useFormType = (stats, option) => {
    const submitFunc = useCallback((e:FormEvent<HTMLFormElement>) => {
        const { require, requireFunc, submitFunc, preventDefault } = option;
        if(preventDefault) e.preventDefault();
        
        if(require && isEmpty(stats)) {
            requireFunc();
            return;
        }

        submitFunc();
    },stats);

    return submitFunc;
}
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// useForm